import {
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Status, User } from './user.entity'
import { ILike, In, Repository } from 'typeorm'
import { RegisterDto } from '../auth/dto/register.dto'
import { ROLE_DEFAULT } from '../role/role.entity'
import { RoleService } from '../role/role.service'
import { Hash } from 'src/utils/hash'
import { UpdateUserDto } from './dto/update.user.dto'
import { FilterUserDto } from './dto/search.user.dto'
import { CreateUserDto } from './dto/create.user.dto'
import { PermissionService } from '../permission/permission.service'
import { mapPermission } from 'src/utils/permission'

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
    private readonly permissionService: PermissionService
  ) {}

  async onModuleInit() {
    // await this.roleService.initRole()
    // const checkUserAdmin = await this.userRepository.findOneBy({
    //   email: 'admin@gmail.com'
    // })
    // if(!checkUserAdmin) {
    //   const hashPassword = Hash.generateHash('1')
    //   const roleAdmin = await this.roleService.getRoleByName(ROLE_DEFAULT.ADMIN)
    //   const dataNewUser = {
    //     email: 'admin@gmail.com',
    //     fullName: 'Super Admin',
    //     password: hashPassword,
    //     role: roleAdmin,
    //     status: 1
    //   }
    //   const newUser = this.userRepository.create(dataNewUser)
    //   await this.userRepository.save(newUser)
    // }
  }

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
        select: ['id', 'fullName', 'email', 'password'],
        relations: ['role']
      })
      if (!user) {
        throw new NotFoundException(`Email address or password incorrect`)
      }
      const findPermission = await this.permissionService.getPermissionByRole(
        user.role.id
      )
      const permissions = mapPermission(findPermission)
      return { ...user, permissions }
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
      const roleCustomer = await this.roleService.getRoleByName(
        ROLE_DEFAULT.USER
      )

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
    const user = await this.userRepository.findOneBy({ id })
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

  async getUserByArrayId(users: number[], filter?: any) {
    try {
      const listUsers = await this.userRepository.find({
        where: {
          id: In(users)
        }
      })
      return listUsers
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
      const roleCustomer = await this.roleService.getRoleByName(
        ROLE_DEFAULT.USER
      )
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

  async getUserRolePermission(id: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { id },
        relations: { role: true }
      })
      if (!user) {
        throw new NotFoundException('User not found')
      }
      const findPermission = await this.permissionService.getPermissionByRole(
        user.role.id
      )
      const permissions = mapPermission(findPermission)
      return { ...user, permissions }
    } catch (e) {
      throw e
    }
  }
}
