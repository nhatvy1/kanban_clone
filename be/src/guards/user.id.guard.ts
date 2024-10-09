import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class UserIdGuard implements CanActivate {
  constructor(private readonly reflect: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean {
    const request = context.switchToHttp().getRequest()
    const user = request.user
    if(user && user.userId) {
      request.body.userId = user.userId
      return true
    }
    return false
  }
}
