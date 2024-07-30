import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common'
import { RoleService } from './role.service'
import { Response } from 'src/utils/response'
import { UpdateRoleDto } from './dto/update.role.dto'
import { CreateRoleDto } from './dto/create.role.dto'

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('init-role')
  async initRole() {
    try {
      const result = await this.roleService.initRole()
      return Response({ message: 'success', statusCode: HttpStatus.OK, result })
    } catch (e) {
      throw e
    }
  }

  @Post()
  async createRole(@Body() createRole: CreateRoleDto) {
    try {
      const result = await this.roleService.createRole(createRole)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch(e) {
      throw e
    }
  }

  @Put(':id')
  updateRole(@Param('id', ParseIntPipe) id: number, @Body() updateRole: UpdateRoleDto) {
    try {
      const result = this.roleService.updateRole(id, updateRole)
    } catch (e) {
      throw e
    }
  }

  @Post('check-permission')
  checkRoleAndPermission() {
    try {
      const result = 1
    } catch(e) {
      throw e
    }
  }
}
