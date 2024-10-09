import { applyDecorators, UseGuards } from '@nestjs/common'
import { UserIdGuard } from 'src/guards/user.id.guard'

export function InjectUserId() {
  return applyDecorators(UseGuards(UserIdGuard))
}
