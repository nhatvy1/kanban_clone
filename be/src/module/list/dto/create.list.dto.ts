import { IsNotEmpty } from "class-validator";

export class CreateListDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  position: string

  @IsNotEmpty()
  project: number
}