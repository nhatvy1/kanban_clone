import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { RoleService } from './role.service'
import { UpdateRoleDto } from './dto/update.role.dto'
import { CreateRoleDto } from './dto/create.role.dto'
import { Authentication } from 'src/decorators/authentication.decorator'
import { Authorization } from 'src/decorators/authorization.decorator'
import { ActionEnum } from '../permission/permission.entity'
import { CheckRoleDto } from './dto/CheckRoleDto'
import { ResponseMessage } from 'src/decorators/response.message.decorator'

@Controller('role')
// @Authentication()
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('')
  @ResponseMessage('Get role successfully')
  @Authorization('role', ActionEnum.READ)
  getRole() {
   return this.roleService.getRole()
  }

  @Post()
  @ResponseMessage('Create role successfully')
  createRole(@Body() createRole: CreateRoleDto) {
    return createRole
    return this.roleService.createRole(createRole)
  }

  @Put(':id')
  @ResponseMessage('Update role successfully')
  updateRole(
    @Param() role: CheckRoleDto,
    @Body() updateRole: UpdateRoleDto
  ) {
    return this.roleService.updateRole(role.id, updateRole)
  }
}
