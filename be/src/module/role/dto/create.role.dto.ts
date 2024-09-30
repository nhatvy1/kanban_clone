import { IsNotEmpty, IsOptional } from 'class-validator'
import { actionEnum } from 'src/module/permission/permission.entity'

export class CreateRoleDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  slug: string

  @IsOptional()
  permissions?: { [key: string]: actionEnum[] }
}
