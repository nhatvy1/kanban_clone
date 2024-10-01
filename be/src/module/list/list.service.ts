import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { List } from './list.entity'
import { Repository } from 'typeorm'
import { CreateListDto } from './dto/create.list.dto'
import { ProjectService } from '../project/project.service'

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List) private readonly listRepository: Repository<List>,
    private readonly projectService: ProjectService
  ) {}

  async createService(createList: CreateListDto) {
    const project = await this.projectService.getProjectById(createList.project)
    if (!project) {
      throw new NotFoundException('Project not found')
    }
    const list = this.listRepository.create({
      ...createList,
      project: project
    })
    await this.listRepository.save(list)
    return list
  }

  async updateService(createList: CreateListDto) {
    const project = await this.projectService.getProjectById(createList.project)
    if (!project) {
      throw new NotFoundException('Project not found')
    }
    const list = this.listRepository.create({
      ...createList,
      project: project
    })
    await this.listRepository.save(list)
    return list
  }
}
