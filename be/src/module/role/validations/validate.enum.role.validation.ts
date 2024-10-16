import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { Injectable, NotFoundException } from '@nestjs/common'
import {
  ActionEnum,
  ModuleNameEnum
} from 'src/module/permission/permission.entity'

@ValidatorConstraint()
@Injectable()
export class ValidateEnumRoleConstraint
  implements ValidatorConstraintInterface
{
  validate(
    permissions: any,
    validationArguments?: ValidationArguments
  ): boolean {
    let flag = true

    for (const module of Object.keys(permissions)) {
      if (!Object.values(ModuleNameEnum).includes(module as ModuleNameEnum)) {
        throw new NotFoundException(`Chức năng: ${module} không tồn tại`)
      }
      for (const action of permissions[module]) {
        if (!Object.values(ActionEnum).includes(action)) {
          throw new NotFoundException(
            `Module: ${module}, không tồn tại quyền: ${action}`
          )
        }
      }
    }
    return flag
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error('Method not implemented.')
  }
}

export function ValidateEnumRole(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: ValidateEnumRoleConstraint
    })
  }
}
