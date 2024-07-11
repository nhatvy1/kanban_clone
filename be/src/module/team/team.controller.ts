import {
  Body,
  Controller,
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

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create')
  async createTeam(@Body() createTeam: CreateTeamDto) {
    try {
      const result = await this.teamService.createTeam(createTeam)
      return Response({
        message: 'Tạo mới team thành cồng',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get('')
  async getTeam() {
    try {
      const result = await this.teamService.getTeam()
      return Response({
        message: 'Lấy danh sách team thành công',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Get(':id')
  async getTeamById(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.teamService.getTeamById(id)
      return Response({
        message: 'Thành công',
        statusCode: HttpStatus.OK,
        result
      })
    } catch (e) {
      throw e
    }
  }

  @Put(':id')
  updateTeamById(@Param('id', ParseIntPipe) id: number) {
    try {
    } catch (e) {
      throw e
    }
  }
}
