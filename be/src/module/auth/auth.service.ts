import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(loginDto: LoginDto) {
    try {
      const user = await this.userService.getUserLogin(loginDto.email)
      console.log('Check user: ', user)
      return 1
    } catch (e) {
      throw e
    }
  }
}
