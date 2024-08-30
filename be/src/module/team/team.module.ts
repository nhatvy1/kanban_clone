import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Team } from './team.entity'
import { TeamController } from './team.controller'
import { TeamService } from './team.service'
import { UserModule } from '../user/user.module'

@Module({
  imports: [TypeOrmModule.forFeature([Team]), UserModule],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
