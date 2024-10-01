import { Module } from '@nestjs/common'
import { ListController } from './list.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { List } from './list.entity'
import { ProjectModule } from '../project/project.module'

@Module({
  imports: [TypeOrmModule.forFeature([List]), ProjectModule],
  providers: [],
  controllers: [ListController]
})
export class ListModule {}
