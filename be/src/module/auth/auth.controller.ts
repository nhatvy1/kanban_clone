import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtRefreshGuard } from 'src/guards/jwt.refresh.auth.guard'
import { TokenVerify } from './interface/token'
import { ResponseMessage } from 'src/decorators/response.message.decorator'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ResponseMessage('Login successfully')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }

  @Post('refresh-token')
  @UseGuards(JwtRefreshGuard)
  refreshToken(@ReqUser() reqUser: TokenVerify) {
    return this.authService.refreshToken(reqUser)
  }
}
