import { Body, Controller, Post, Put } from '@nestjs/common'
import { CreateListDto } from './dto/create.list.dto'
import { ListService } from './list.service'
import { ResponseMessage } from 'src/decorators/response.message.decorator'
import { UpdateListDto } from './dto/update.list.dto'
import { Authentication } from 'src/decorators/authentication.decorator'
import { ReqUser } from 'src/decorators/user.decorator'
import { JwtPayload } from '../auth/interface/jwt.payload'

@Controller()
@Authentication()
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post('')
  @ResponseMessage('Create list successfully')
  createList(@Body() createList: CreateListDto) {
    return this.listService.createService(createList)
  }

  @Put(':id')
  updateList(
    @ReqUser() reqUser: JwtPayload,
    @Body() updateList: UpdateListDto
  ) {
    return 1
  }
}
