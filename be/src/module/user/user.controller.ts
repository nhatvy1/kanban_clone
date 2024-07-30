import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put
} from '@nestjs/common'
import { UserService } from './user.service'
import { Authentication } from 'src/decorators/authentication.decorator'
import { Response } from 'src/utils/response'
import { UpdateUserDto } from './dto/update.user.dto'

@Controller('user')
@Authentication()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getListUser() {
    return 1
  }

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.userService.getUserById(id)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.userService.getUserById(id)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      const result = await this.userService.updateUserDto(id, updateUserDto)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }
}
