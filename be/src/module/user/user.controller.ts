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
  Query,
  UnauthorizedException,
} from '@nestjs/common'
import { UserService } from './user.service'
import { Response } from 'src/utils/response'
import { UpdateUserDto } from './dto/update.user.dto'
import { FilterUserDto } from './dto/search.user.dto'
import { CreateUserDto } from './dto/create.user.dto'
import { Authentication } from 'src/decorators/authentication.decorator'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { Authorization } from 'src/decorators/authorization.decorator'
import { actionEnum } from '../permission/permission.entity'
import { RessponseMessage } from 'src/decorators/response.message.decorator'

@Controller('user')
// @Authentication()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  @Authorization('user', actionEnum.CREATE)
  async createUser(@Body() body: CreateUserDto) {
    try {
      const result = await this.userService.createUser(body)
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
  @Authorization('user', actionEnum.READ)
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

  @Get('get/role-permission')
  async getUserRolePermission(@ReqUser() reqUser: JwtPayload) {
    try {
      const result = await this.userService.getUserRolePermission(reqUser.userId)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get('/demo/demo')
  @RessponseMessage("Login successful")
  async getDemo() {
    throw new UnauthorizedException('Unauthorization')
    return 1
  }
}
