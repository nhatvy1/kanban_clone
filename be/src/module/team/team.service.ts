import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Team } from './team.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>
  ) {}

  createTeam() {
    try {

    } catch(e) {
      throw e
    }
  }
}
