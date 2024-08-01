import { Body, Controller, Post } from '@nestjs/common'
import { ProjectService } from './project.service'
import { Authentication } from 'src/decorators/authentication.decorator'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'
import { CreateProjectDto } from './dto/create.projectd.dto'

@Controller('project')
@Authentication()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('')
  async createProject(
    @ReqUser() reqUser: JwtPayload,
    @Body() createProject: CreateProjectDto
  ) {
    try {
      const result = await this.projectService.createProject(1, createProject)
    } catch (e) {
      throw e
    }
  }
}
