import {
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ROLE_DEFAULT, Role } from './role.entity'
import { Repository } from 'typeorm'
import { PermissionService } from '../permission/permission.service'
import { ActionEnum } from '../permission/permission.entity'
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
        action: ActionEnum.MANAGE,
        role: admin
      })
    }
  }

  async createRole(createRole: CreateRoleDto) {
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
      permissions[subject].forEach((action: ActionEnum) => {
        this.permissionService.createPermission({ action, subject, role })
      })
    }
    return role
  }

  async updateRole(id: number, { name, slug, permissions }: UpdateRoleDto) {
    const result = await this.roleRepository.findOne({
      where: { id },
      relations: { permission: true }
    })

    let permissionCurrent = [...result.permission]

    for (const subject of Object.keys(permissions)) {
      permissions[subject].forEach((action: ActionEnum) => {
        this.permissionService.createPermission({
          action,
          subject,
          role: result
        })
        permissionCurrent = permissionCurrent.filter(
          (p) => !(p.action === action && p.subject === subject)
        )
      })
    }

    permissionCurrent.forEach(async (permission) => {
      result.permission = result.permission.filter(
        (p) => p.id !== permission.id
      )
      await this.roleRepository.save(result)
    })

    return result
  }

  getRoleById(id: number) {
    return this.roleRepository.findOneBy({ id })
  }

  async getRoleByName(name: string) {
    const role = await this.roleRepository.findOneBy({ slug: name })
    if (!name) {
      throw new NotFoundException('Role not found')
    }
    return role
  }

  async getRole() {
    return this.roleRepository.find()
  }

  checkRoleName(name: string) {
    return this.roleRepository.findOne({
      where: {
        name
      }
    })
  }
}
