import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'src/utils/response';
import { RegisterDto } from './dto/register.dto';
import { ReqUser } from 'src/decorators/user.decorator';
import { JwtRefreshGuard } from 'src/guards/jwt.refresh.auth.guard';
import { TokenVerify } from './interface/token';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(loginDto)
      return Response({
        message: 'Login successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
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
