import { UseGuards, applyDecorators } from '@nestjs/common'
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard'

export function Authentication() {
  return applyDecorators(UseGuards(JwtAuthGuard))
}