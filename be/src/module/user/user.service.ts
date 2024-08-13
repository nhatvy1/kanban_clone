import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Status, User } from './user.entity'
import { ILike, Repository } from 'typeorm'
import { RegisterDto } from '../auth/dto/register.dto'
import { role } from '../role/role.entity'
import { RoleService } from '../role/role.service'
import { Hash } from 'src/utils/hash'
import { UpdateUserDto } from './dto/update.user.dto'
import { FilterUserDto } from './dto/search.user.dto'
import { CreateUserDto } from './dto/create.user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService
  ) {}

  async checkEmail(email: string) {
    try {
      const existEmail = await this.userRepository.findOneBy({ email })
      if (!existEmail) {
        throw new NotFoundException(`Email hoặc mật khẩu không chính xác`)
      }
      return existEmail
    } catch (e) {
      throw e
    }
  }

  async getUserLogin(email: string) {
    try {
      const user = await this.userRepository.findOne({
        where: { email: email },
        select: ['id', 'email', 'password']
      })
      if (!user) {
        throw new NotFoundException(`Email hoặc mật khẩu không chính xác`)
      }
      return user
    } catch (e) {
      throw e
    }
  }

  async register(createUser: RegisterDto) {
    try {
      const checkEmail = await this.userRepository.findOneBy({
        email: createUser.email
      })
      if (checkEmail) {
        throw new ConflictException('Email address is already registered')
      }
      const hashPassword = Hash.generateHash(createUser.password)
      const roleCustomer = await this.roleService.getRoleByName(role.USER)

      const dataUser = {
        ...createUser,
        password: hashPassword,
        role: roleCustomer
      }
      const newUser = this.userRepository.create(dataUser)
      await this.userRepository.save(newUser)
      delete newUser.password

      return newUser
    } catch (e) {
      throw e
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id })
      if (!user) {
        throw new NotFoundException('User not found')
      }
      return user
    } catch (e) {
      throw e
    }
  }

  async deleteUserById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id })
      if (!user) {
        throw new NotFoundException('User not found')
      }
      await this.userRepository.remove(user)
      return user
    } catch (e) {
      throw e
    }
  }

  async updateUserDto(id: number, updateUser: UpdateUserDto) {
    try {
      const user = await this.userRepository.findOneBy({ id })
      if (!user) {
        throw new NotFoundException('User not found')
      }

      for (const key of Object.keys(updateUser)) {
        if (key !== 'email' && key !== 'password' && key !== 'role') {
          user[key] = updateUser[key]
        }
      }

      if (updateUser.role) {
        const role = await this.roleService.getRoleById(updateUser.role)
        user.role = role
      }

      await this.userRepository.update(id, user)
    } catch (e) {
      throw e
    }
  }

  async getUsers(filterUser: FilterUserDto) {
    try {
      const { limit, page, search } = filterUser
      const skip = (page - 1) * limit

      const [list, totalResults] = await this.userRepository.findAndCount({
        order: { createdAt: 'DESC' },
        take: limit,
        skip: skip,
        relations: { role: true },
        where: [
          { fullName: ILike(`%${search}%`) },
          { email: ILike(`%${search}%`) }
        ]
      })
      return {
        result: list,
        totalResults: totalResults,
        limit: limit,
        page: page
      }
    } catch (e) {
      throw e
    }
  }

  async createUser(createUser: CreateUserDto) {
    try {
      const checkEmail = await this.userRepository.findOneBy({
        email: createUser.email
      })
      if (checkEmail) {
        throw new ConflictException('Email address is already registered')
      }

      const hashPassword = Hash.generateHash(createUser.password)
      const roleCustomer = await this.roleService.getRoleByName(role.USER)
      const status = Status[createUser.status] ?? Status.BLOCK

      const dataNewUser = {
        ...createUser,
        password: hashPassword,
        role: roleCustomer,
        status: status
      }
      const newUser = this.userRepository.create(dataNewUser)
      await this.userRepository.save(newUser)
    } catch (e) {
      throw e
    }
  }
}
