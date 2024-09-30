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

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly userService: UserService
  ) {}

  async createProject(userId: number, createProject: CreateProjectDto) {
    const user = await this.userService.getUserById(userId)
    if (!user) {
      throw new NotFoundException('User not found')
    }

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
    if (!project) {
      throw new NotFoundException('Project not found')
    }

    for (const key of Object.keys(updateProject)) {
      project[key] = updateProject[key]
    }
    await this.projectRepository.save(project)
    return project
  }

  async deleteProjectById(projectId: number, userId: number) {
    try {
      const project = await this.projectRepository.findOne({
        where: {
          id: projectId,
          creator: { id: userId }
        }
      })
      if (!project) {
        throw new NotFoundException('Project not found')
      }

      await this.projectRepository.remove(project)
      return project
    } catch (e) {
      throw e
    }
  }

  async getAllProjectByUser(id: number) {
    try {
      return this.projectRepository.find({
        where: { creator: { id: id } },
        relations: ['creator']
      })
    } catch (e) {
      throw e
    }
  }
}
