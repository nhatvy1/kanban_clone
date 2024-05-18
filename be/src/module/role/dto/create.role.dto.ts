import { IsNotEmpty } from 'class-validator'
import { actionEnum } from '../role.entity'

export class CreateRoleDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  slug: string

  @IsNotEmpty()
  permissions: { [key: string]: actionEnum[] }
}
