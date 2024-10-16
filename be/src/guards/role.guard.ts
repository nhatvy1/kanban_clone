import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { ActionEnum } from 'src/module/permission/permission.entity'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const action = this.reflector.getAllAndOverride<ActionEnum>('action', [
      context.getHandler(),
      context.getClass()
    ])

    const subject = this.reflector.getAllAndOverride<string>('subject', [
      context.getHandler(),
      context.getClass()
    ])

    const { user } = context.switchToHttp().getRequest()

    if (!action || !subject) {
      return true
    }
    const { permissions } = user

    if (!Object.keys(permissions).length) {
      throw new UnauthorizedException()
    }

    let flag = false

    for (const key of Object.keys(permissions)) {
      permissions[key].map((item: any) => {
        if (item === ActionEnum.MANAGE && key === 'all') {
          flag = true
        }

        if (item === ActionEnum.MANAGE && key === subject) {
          flag = true
        }

        if (item === action && key === subject) {
          flag = true
        }
      })
    }

    if (flag) {
      return true
    }

    throw new ForbiddenException(`You don't have permission to access`)
  }
}
