import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UpdateUserDto } from './dto/update.user.dto'
import { FilterUserDto } from './dto/search.user.dto'
import { CreateUserDto } from './dto/create.user.dto'
import { Authentication } from 'src/decorators/authentication.decorator'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { Authorization } from 'src/decorators/authorization.decorator'
import { ActionEnum } from '../permission/permission.entity'
import { ResponseMessage } from 'src/decorators/response.message.decorator'

@Controller('user')
// @Authentication()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  @Authorization('user', ActionEnum.CREATE)
  @ResponseMessage('Create user successfully')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body)
  }

  @Get()
  @Authorization('user', ActionEnum.READ)
  @ResponseMessage('Get list user successfully')
  async getListUser(@Query() filterUser: FilterUserDto) {
    return this.userService.getUsers(filterUser)
  }

  @Get('/profile')
  @ResponseMessage('Get profile successfully')
  getProfile() {
    const user = 213
    return 11
  }

  @Get(':id')
  @ResponseMessage('success')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id)
  }

  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id)
  }

  @Put(':id')
  @ResponseMessage('Update user successfully')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.updateUserDto(id, updateUserDto)
  }

  @Get('get/role-permission')
  getUserRolePermission(@ReqUser() reqUser: JwtPayload) {
    return this.userService.getUserRolePermission(reqUser.userId)
  }
}
