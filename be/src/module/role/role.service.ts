import { ConflictException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { role, Role } from './role.entity'
import { Repository } from 'typeorm'
import { PermissionService } from '../permission/permission.service'
import { actionEnum } from '../permission/permission.entity'
import { Response } from 'src/utils/response'
import { UpdateRoleDto } from './dto/update.role.dto'
import { CreateRoleDto } from './dto/create.role.dto'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    private readonly permissionService: PermissionService,
  ) {}

  async initRole() {
    try {
      const user = this.roleRepository.create({
        name: 'Người dùng',
        slug: role.USER,
      })
      await this.roleRepository.save(user)

      const admin = this.roleRepository.create({
        name: 'Quản trị viên',
        slug: role.ADMIN,
      })
      await this.roleRepository.save(admin)
      await this.permissionService.createPermission({
        subject: 'all',
        action: actionEnum.MANAGE,
        role: admin,
      })
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
      })
    } catch (e) {
      throw e
    }
  }

  async createRole(createRole: CreateRoleDto) {
    try {
      const { name, slug, permissions } = createRole
      const checkRole = await this.roleRepository.findOne({
        where: {
          slug: createRole.slug,
        },
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
}
