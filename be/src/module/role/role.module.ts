import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Role } from './role.entity'
import { PermissionModule } from '../permission/permission.module'
import { ValidateEnumRoleConstraint } from './validations/validate.enum.role.validation'

@Module({
  imports: [TypeOrmModule.forFeature([Role]), PermissionModule],
  controllers: [RoleController],
  providers: [RoleService, ValidateEnumRoleConstraint],
  exports: [RoleService]
})
export class RoleModule {}
