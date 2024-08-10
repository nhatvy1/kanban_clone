import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query
} from '@nestjs/common'
import { UserService } from './user.service'
import { Authentication } from 'src/decorators/authentication.decorator'
import { Response } from 'src/utils/response'
import { UpdateUserDto } from './dto/update.user.dto'
import { FilterUserDto } from './dto/search.user.dto'
import { CreateUserDto } from './dto/create.user.dto'

@Controller('user')
@Authentication()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async createUser(@Body() body: CreateUserDto) {
    try {
      const result = await this.userService.checkEmail
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get()
  async getListUser(@Query() filterUser: FilterUserDto) {
    try {
      const result = await this.userService.getUsers(filterUser)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
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
        result: result
      })
    } catch (e) {
      throw e
    }
  }
}
