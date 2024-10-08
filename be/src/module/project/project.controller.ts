import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { ProjectService } from './project.service'
import { Authentication } from 'src/decorators/authentication.decorator'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { CreateProjectDto } from './dto/create.projectd.dto'
import { UpdateProjectDto } from './dto/update.project.dto'
import { ResponseMessage } from 'src/decorators/response.message.decorator'
import { InjectUserId } from 'src/decorators/inject.user.id.decorator'
import { DeleteProjectDto } from './dto/delete.project.dto'

@Controller('project')
@Authentication()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('')
  @ResponseMessage('Create project successfully')
  @InjectUserId()
  async createProject(
    @ReqUser() reqUser: JwtPayload,
    @Body() createProject: CreateProjectDto
  ) {
    return this.projectService.createProject(reqUser.userId, createProject)
  }

  @Get('/by-user')
  @ResponseMessage('Get project by user')
  getProjectByUser(@ReqUser() reqUser: JwtPayload) {
    return this.projectService.getAllProjectByUser(reqUser.userId)
  }

  @Put(':id')
  @ResponseMessage('Update project successfully')
  @InjectUserId()
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
  @InjectUserId()
  async deleteProjectById(@Body() deleteProject: DeleteProjectDto) {
    return this.projectService.deleteProjectById(deleteProject)
  }
}
