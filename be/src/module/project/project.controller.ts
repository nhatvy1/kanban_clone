import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query
} from '@nestjs/common'
import { ProjectService } from './project.service'
import { Authentication } from 'src/decorators/authentication.decorator'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { CreateProjectDto } from './dto/create.projectd.dto'
import { UpdateProjectDto } from './dto/update.project.dto'
import { ResponseMessage } from 'src/decorators/response.message.decorator'
import { DeleteProjectDto } from './dto/delete.project.dto'
import { SearchProjectDto } from './dto/search.project.dto'

@Controller('project')
@Authentication()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('')
  @ResponseMessage('Create project successfully')
  async createProject(
    @ReqUser() reqUser: JwtPayload,
    @Body() createProject: CreateProjectDto
  ) {
    return createProject
    return this.projectService.createProject(reqUser.userId, createProject)
  }

  @Get('/by-user')
  @ResponseMessage('Get project by user')
  getProjectByUser(
    @ReqUser() reqUser: JwtPayload
  ) {
    return this.projectService.getAllProjectByUser(reqUser.userId)
  }

  @Put(':id')
  @ResponseMessage('Update project successfully')
  async updateProjectById(
    @Param('id', ParseIntPipe) id: number,
    @ReqUser() reqUser: JwtPayload,
    @Body() updateProject: UpdateProjectDto
  ) {
    return this.projectService.updateProjectById(
      id,
      updateProject,
      reqUser.userId
    )
  }

  @Delete('')
  @ResponseMessage('Delete project successfully')
  async deleteProjectById(@Body() deleteProject: DeleteProjectDto) {
    return this.projectService.deleteProjectById(deleteProject)
  }
}
