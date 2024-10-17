import { BadRequestException, Injectable } from '@nestjs/common'
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { ProjectService } from '../project.service'
import { UserService } from 'src/module/user/user.service'

@ValidatorConstraint({ async: true })
@Injectable()
export class IsNotExistedProjectNameConstraint
  implements ValidatorConstraintInterface
{
  constructor(
    private readonly projectService: ProjectService,
    private readonly userService: UserService
  ) {}

  async validate(
    value: string,
    validationArguments?: ValidationArguments
  ): Promise<boolean> {
    const userId = (validationArguments.object as any).userId
    console.log('Check userId: ', userId)
    const user = await this.userService.getUserById(userId)
    if(!user) throw new BadRequestException('User not found')

    const project = await this.projectService.checkProjectNameByUser(
      value,
      userId
    )
    if (project) throw new BadRequestException('Project name already exists')

    return true
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error('Project name already exists or user not found')
  }
}

export function IsNotExistedProjectName(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsNotExistedProjectNameConstraint
    })
  }
}
