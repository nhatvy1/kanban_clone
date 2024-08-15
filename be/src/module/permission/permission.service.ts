import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { actionEnum, Permission } from './permission.entity'
import { Repository } from 'typeorm'
import { Role } from '../role/role.entity'

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>
  ) {}

  async createPermission({
    subject,
    action,
    role
  }: {
    subject: string
    action: actionEnum
    role: Role
  }) {
    try {
      const permission = await this.permissionRepository.findOne({
        where: {
          action: action,
          subject: subject,
          role: { id: role.id }
        }
      })
      if (permission) {
        return permission
      } else {
        const checkExistPermission = await this.permissionRepository.findOne({
          where: {
            action: action,
            subject: subject
          },
          relations: { role: true }
        })
        if (checkExistPermission) {
          checkExistPermission.role = [
            ...(checkExistPermission?.role || []),
            role
          ]
          return this.permissionRepository.save(checkExistPermission)
        } else {
          const newPermission = this.permissionRepository.create({
            action: action,
            subject: subject
          })
          newPermission.role = [...(newPermission?.role || []), role]
          await this.permissionRepository.save(newPermission)
          return newPermission
        }
      }
    } catch (e) {
      throw e
    }
  }

  async getPermissionByRole(id: number) {
    try {
      const rolePermission = await this.permissionRepository.find({
        where: {
          role: {
            id
          }
        }
      })

      return rolePermission
    } catch (e) {
      throw e
    }
  }
}
