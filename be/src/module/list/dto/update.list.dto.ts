import { IsNotEmpty } from "class-validator"

export class UpdateListDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  position: string

  @IsNotEmpty()
  project: number
}