import {
  ConflictException,
  Get,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Team } from './team.entity'
import { Repository } from 'typeorm'
import { CreateTeamDto } from './dto/create.team.dto'

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>
  ) {}

  async createTeam(createTeam: CreateTeamDto) {
    try {
      const teamName = await this.teamRepository.findOneBy({
        name: createTeam.name
      })
      if (teamName) {
        throw new ConflictException('Team name already exists')
      }

      const newTeam = this.teamRepository.create({ name: createTeam.name })
      await this.teamRepository.save(teamName)
      return newTeam
    } catch (e) {
      throw e
    }
  }

  async getTeam() {
    try {
      const team = await this.teamRepository.find()
      return team
    } catch (e) {
      throw e
    }
  }

  async getTeamById(id: number) {
    try {
      const team = await this.teamRepository.findOneBy({ id })
      if (!team) {
        throw new NotFoundException('Team not found')
      }
      return team
    } catch (e) {
      throw e
    }
  }

  async updateTeamName(id: number, updateTeam: CreateTeamDto) {
    try {
      const checkTeam = await this.teamRepository.findOneBy({ id })
      if (!checkTeam) {
        throw new NotFoundException('Team not found')
      }
      const team = await this.teamRepository.update(id, {
        name: updateTeam.name
      })
      return team
    } catch (e) {
      throw e
    }
  }

  async deleteTeamById(id: number) {
    try {
      const team = await this.teamRepository.findOneBy({ id })
      if (!team) {
        throw new NotFoundException('Team not found')
      }
      await this.teamRepository.remove(team)
      return team
    } catch (e) {
      throw e
    }
  }
}
