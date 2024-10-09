import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Project } from './project.entity'
import { Repository } from 'typeorm'
import { CreateProjectDto } from './dto/create.projectd.dto'
import { UserService } from '../user/user.service'
import { UpdateProjectDto } from './dto/update.project.dto'
import { DeleteProjectDto } from './dto/delete.project.dto'

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly userService: UserService
  ) {}

  async createProject(userId: number, createProject: CreateProjectDto) {
    const user = await this.userService.getUserById(userId)

    const newProject = this.projectRepository.create({
      ...createProject,
      creator: user
    })
    await this.projectRepository.save(newProject)
    return newProject
  }

  async updateProjectById(
    id: number,
    updateProject: UpdateProjectDto,
    userId: number
  ) {
    const project = await this.projectRepository.findOne({
      where: {
        id: id,
        creator: { id: userId }
      }
    })

    for (const key of Object.keys(updateProject)) {
      project[key] = updateProject[key]
    }
    await this.projectRepository.save(project)
    return project
  }

  async deleteProjectById(deleteProject: DeleteProjectDto) {
    await this.projectRepository.delete(deleteProject.id)
    return deleteProject.id
  }

  async getAllProjectByUser(id: number) {
    return this.projectRepository.find({
      where: { creator: { id: id } },
      relations: ['creator']
    })
  }

  async checkProjectNameByUser(projectName: string, userId: number) {
    return this.projectRepository.findOne({
      where: {
        name: projectName,
        creator: { id: userId }
      }
    })
  }

  getProjectUserById(projectId: number, userId: number) {
    return this.projectRepository.findOne({
      where: {
        id: projectId,
        creator: { id: userId }
      }
    })
  }

  getProjectById(id: number) {
    return this.projectRepository.findOneBy({ id })
  }
}
