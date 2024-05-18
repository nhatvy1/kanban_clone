import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { actionEnum, Permission } from './permission.entity';
import { Repository } from 'typeorm'
import { Role } from '../role/role.entity'

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission) private readonly permissionRepository: Repository<Permission>,
  ) {}

  async createPermission({
    subject,
    action,
    role,
  }: {
    subject: string
    action: actionEnum
    role: Role
  }) {
    try {
      const permission = await this.permissionRepository.find({
        where: {
          subject: subject,
          action: action,
          role: { id: role.id }
        }
      })
      if(permission) {
        return permission
      } else {
        const permission = this.permissionRepository.create({
          subject: subject, action: action
        })
        permission.role = [role]
        await this.permissionRepository.save(permission)
  
        return permission
      }
    } catch(e) {
      throw e
    }
  }
}
