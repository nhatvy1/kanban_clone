import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(loginDto: LoginDto) {
    try {
      const result = await this.authService.login(loginDto)
      return 1
    } catch(e) {
      return e
    }
  }
}
