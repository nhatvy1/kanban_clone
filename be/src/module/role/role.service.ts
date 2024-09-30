import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
  OnModuleInit
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ROLE_DEFAULT, Role } from './role.entity'
import { Repository } from 'typeorm'
import { PermissionService } from '../permission/permission.service'
import { actionEnum } from '../permission/permission.entity'
import { UpdateRoleDto } from './dto/update.role.dto'
import { CreateRoleDto } from './dto/create.role.dto'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    private readonly permissionService: PermissionService
  ) {}

  async initRole() {
    const checkRoleUser = await this.roleRepository.findOneBy({
      slug: ROLE_DEFAULT.USER
    })
    if (!checkRoleUser) {
      const user = this.roleRepository.create({
        name: 'Người dùng',
        slug: ROLE_DEFAULT.USER
      })
      await this.roleRepository.save(user)
    }

    const checkRoleAdmin = await this.roleRepository.findOneBy({
      slug: ROLE_DEFAULT.ADMIN
    })
    if (!checkRoleAdmin) {
      const admin = this.roleRepository.create({
        name: 'Quản trị viên',
        slug: ROLE_DEFAULT.ADMIN
      })
      await this.roleRepository.save(admin)
      await this.permissionService.createPermission({
        subject: 'all',
        action: actionEnum.MANAGE,
        role: admin
      })
    }
  }

  async createRole(createRole: CreateRoleDto) {
    try {
      const { name, slug, permissions } = createRole
      const checkRole = await this.roleRepository.findOne({
        where: {
          slug: createRole.slug
        }
      })
      if (checkRole) {
        throw new ConflictException('Role existed')
      }

      const result = this.roleRepository.create({ name, slug })
      const role = await this.roleRepository.save(result)

      for (const subject of Object.keys(permissions)) {
        permissions[subject].forEach((action: actionEnum) => {
          this.permissionService.createPermission({ action, subject, role })
        })
      }

      return role
    } catch (e) {
      throw e
    }
  }

  async updateRole(id: number, updateRole: UpdateRoleDto) {
    try {
      return 1
    } catch (e) {
      throw e
    }
  }

  async getRoleById(id: number) {
    try {
      const role = await this.roleRepository.findOneBy({ id })
      return role
    } catch (e) {
      throw e
    }
  }

  async getRoleByName(name: string) {
    try {
      const role = await this.roleRepository.findOneBy({ slug: name })
      if (!name) {
        throw new NotFoundException('Role not found')
      }
      return role
    } catch (e) {
      throw e
    }
  }

  async getRole() {
    try {
      const listRoles = await this.roleRepository.find()
      return listRoles
    } catch (e) {
      throw e
    }
  }

  checkRoleName(name: string) {
    return this.roleRepository.findOne({
      where: {
        name
      }
    })
  }
}
