import { Body, Controller, Post } from "@nestjs/common";
import { CreateListDto } from "./dto/create.list.dto";
import { ListService } from "./list.service";
import { ResponseMessage } from "src/decorators/response.message.decorator";

@Controller()
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post('')
  @ResponseMessage('Create list successfully')
  createList(@Body() createList: CreateListDto) {
    return this.listService.createService(createList)
  }
}