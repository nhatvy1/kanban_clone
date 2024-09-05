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

  async createProject(id: number, createProject: CreateProjectDto) {
    try {
      const checkProject = await this.projectRepository.findOneBy({
        name: createProject.name
      })
      if (checkProject) {
        throw new ConflictException('Project existed')
      }
      const user = await this.userService.getUserById(id)
      if (!user) {
        throw new NotFoundException('User not found')
      }

      const newProject = this.projectRepository.create({
        ...createProject,
        creator: user
      })
      await this.projectRepository.save(newProject)
      return newProject
    } catch (e) {
      throw e
    }
  }

  async updateProjectById(id: number, updateProject: UpdateProjectDto) {
    try {
      const project = await this.projectRepository.findOneBy({ id })
      if(!project) {
        throw new NotFoundException('Project not found')
      }

      for (const key of Object.keys(updateProject)) {
        project[key] = updateProject[key] 
      }
      await this.projectRepository.save(project)
      return project
    } catch(e) {
      throw e
    }
  }

  async deleteProjectById(id: number) {
    try {
      const project = await this.projectRepository.findOneBy({ id })
      if(!project) {
        throw new NotFoundException('Project not found')
      }

      await this.projectRepository.remove(project)
      return project
    } catch(e) {
      throw e
    }
  }
}
