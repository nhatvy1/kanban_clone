import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { ProjectService } from './project.service'
import { Authentication } from 'src/decorators/authentication.decorator'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { CreateProjectDto } from './dto/create.projectd.dto'
import { UpdateProjectDto } from './dto/update.project.dto'
import { Response } from 'src/utils/response'

@Controller('project')
@Authentication()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  async createProject(
    @ReqUser() reqUser: JwtPayload,
    @Body() createProject: CreateProjectDto
  ) {
    try {
      const result = await this.projectService.createProject(1, createProject)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Put('update/:id')
  async updateProjectById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProject: UpdateProjectDto
  ) {
    try {
      const result = await this.projectService.updateProjectById(
        id,
        updateProject
      )
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Delete('delete/:id')
  async deleteProjectById(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.projectService.deleteProjectById(id)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }
}
