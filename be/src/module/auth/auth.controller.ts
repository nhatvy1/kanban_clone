import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'src/utils/response';
import { RegisterDto } from './dto/register.dto';

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
}
