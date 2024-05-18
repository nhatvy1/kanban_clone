import { Controller, Delete, Get, Put } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getListUser() {
    return 1
  }

  @Get(':id')
  async getUserById() {
    return 1
  }

  @Delete()
  deleteUserById() {
    return 1
  }

  @Put()
  async updateUserById() {
    return 1
  }
}
