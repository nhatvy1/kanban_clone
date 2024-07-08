import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { TeamService } from './team.service'

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create')
  createTeam() {
    try {
    } catch (e) {
      throw e
    }
  }

  @Get('')
  getTeam() {
    try {
    } catch (e) {
      throw e
    }
  }

  @Get(':id')
  getTeamById(@Param('id', ParseIntPipe) id: number) {
    try {
    } catch (e) {
      throw e
    }
  }
}
