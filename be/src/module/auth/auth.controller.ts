import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'src/utils/response';
import { RegisterDto } from './dto/register.dto';
import { ReqUser } from 'src/decorators/user.decorator';
import { JwtRefreshGuard } from 'src/guards/jwt.refresh.auth.guard';
import { TokenVerify } from './interface/token';
import { ResponseMessage } from 'src/decorators/response.message.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ResponseMessage('Login successfully')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const result = await this.authService.register(registerDto)
      return Response({
        message: 'Regiser successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Post('refresh-token')
  @UseGuards(JwtRefreshGuard)
  async refreshToken(@ReqUser() reqUser: TokenVerify) {
    try {
      const result = await this.authService.refreshToken(reqUser)
      return Response({
        statusCode: HttpStatus.OK,
        message: 'Get a new accessToken successfully',
        result
      })
    } catch(e) {
      throw e
    }
  }
}
