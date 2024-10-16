import { IsNotEmpty, IsOptional } from 'class-validator'
import { ActionEnum } from 'src/module/permission/permission.entity'
import { ValidateEnumRole } from '../validations/validate.enum.role.validation'

export class CreateRoleDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  slug: string

  @IsOptional()
  @ValidateEnumRole()
  permissions?: { [key: string]: string[] }
}
