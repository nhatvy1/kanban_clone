import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Project } from './project.entity'
import { Repository } from 'typeorm'
import { CreateProjectDto } from './dto/create.projectd.dto'

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ) {}

  async createProject(id: number, createProject: CreateProjectDto) {
    try {
      return 1
    } catch(e) {
      throw e
    }
  }
}
