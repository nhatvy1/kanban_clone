import { Module } from '@nestjs/common'
import { ListController } from './list.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { List } from './list.entity'

@Module({
  imports: [TypeOrmModule.forFeature([List])],
  providers: [],
  controllers: [ListController]
})
export class ListModule {}
