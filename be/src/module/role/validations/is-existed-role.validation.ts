import { Injectable, NotFoundException } from '@nestjs/common'
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { RoleService } from '../role.service'
import { IsNotExistedProjectNameConstraint } from 'src/module/project/validations/is-not-existed-project-name.validation'

@ValidatorConstraint({ async: true })
@Injectable()
export class IsExistedRoleConstraint implements ValidatorConstraintInterface {
  constructor(private readonly roleService: RoleService) {}

  async validate(
    id: number,
    validationArguments?: ValidationArguments
  ): Promise<boolean> {
    const role = await this.roleService.getRoleById(id)
    if (!role) throw new NotFoundException('Role not existed.')
    return true
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error('Method not implemented.')
  }
}


export function IsExistedRole(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsNotExistedProjectNameConstraint
    })
  }
}