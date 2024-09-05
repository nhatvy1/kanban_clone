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
import { UserService } from '../user/user.service'
import { UpdateTeamDto } from './dto/update.team.dto'
import { User } from '../user/user.entity'

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
    private readonly userService: UserService
  ) {}

  async createTeam(createTeam: CreateTeamDto) {
    try {
      const teamName = await this.teamRepository.findOneBy({
        name: createTeam.name
      })
      if (teamName) {
        throw new ConflictException('Team name already exists')
      }

      const listUser = await this.userService.getUserByArrayId(
        createTeam.users,
        {}
      )

      const newTeam = this.teamRepository.create({
        name: createTeam.name,
        users: listUser
      })
      await this.teamRepository.save(newTeam)
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

  async updateTeamName(id: number, updateTeam: UpdateTeamDto) {
    try {
      const team = await this.teamRepository.findOneBy({ id })
      if (!team) {
        throw new NotFoundException('Team not found')
      }

      team.name = updateTeam.name
      if (updateTeam.users) {
        const listUser = await this.userService.getUserByArrayId(
          updateTeam.users
        )
        team.users = listUser
      }
      await this.teamRepository.save(team)
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
