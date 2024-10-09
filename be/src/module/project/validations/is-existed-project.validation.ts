import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { ProjectService } from '../project.service'
import { UserService } from 'src/module/user/user.service'
import { BadRequestException, Injectable } from '@nestjs/common'

@ValidatorConstraint({ async: true })
@Injectable()
export class IsExistedProjectConstraint
  implements ValidatorConstraintInterface
{
  constructor(
    private readonly projectService: ProjectService,
    private readonly userService: UserService
  ) {}

  async validate(
    id: number,
    validationArguments?: ValidationArguments
  ): Promise<boolean> {
    const userId = (validationArguments.object as any).userId
    const user = await this.userService.getUserById(userId)
    if (!user) throw new BadRequestException('User not found')

    const project = await this.projectService.getProjectUserById(id, userId)
    if (!project) throw new BadRequestException('Project not found')

    return true
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error('project not found or user not found')
  }
}

export function IsExistedProject(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsExistedProjectConstraint
    })
  }
}
