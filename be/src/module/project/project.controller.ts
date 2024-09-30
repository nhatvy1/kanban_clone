import {
  Body,
  Controller,
  Delete,
  Get,
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
import { ResponseMessage } from 'src/decorators/response.message.decorator'

@Controller('project')
@Authentication()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  @ResponseMessage('Create project successfully')
  async createProject(
    @ReqUser() reqUser: JwtPayload,
    @Body() createProject: CreateProjectDto
  ) {
    return this.projectService.createProject(1, createProject)
  }

  @Get('/by-user')
  @ResponseMessage('Get project by user')
  getProjectByUser() {
    return 1
  }

  @Put('update/:id')
  @ResponseMessage('Update project successfully')
  async updateProjectById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProject: UpdateProjectDto
  ) {
    return this.projectService.updateProjectById(id, updateProject)
  }

  @Delete('delete/:id')
  @ResponseMessage('Delete project successfully')
  async deleteProjectById(@Param('id', ParseIntPipe) id: number) {
    return this.projectService.deleteProjectById(id)
  }
}
