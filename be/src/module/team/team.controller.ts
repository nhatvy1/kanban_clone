import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { TeamService } from './team.service'
import { CreateTeamDto } from './dto/create.team.dto'
import { Response } from 'src/utils/response'
import { Authentication } from 'src/decorators/authentication.decorator'
import { UpdateTeamDto } from './dto/update.team.dto'

@Controller('team')
// @Authentication()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create')
  async createTeam(@Body() createTeam: CreateTeamDto) {
    try {
      const result = await this.teamService.createTeam(createTeam)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get('get')
  async getTeam() {
    try {
      const result = await this.teamService.getTeam()
      return Response({
        message: 'Get teams successfully',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get('get/:id')
  async getTeamById(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.teamService.getTeamById(id)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Put('update/:id')
  async updateTeamById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeam: UpdateTeamDto
  ) {
    try {
      const result = await this.teamService.updateTeamName(id, updateTeam)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Delete('delete:id')
  async deleteTeamById(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.teamService.deleteTeamById(id)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }
}
