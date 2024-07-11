import { IsNotEmpty } from "class-validator";

export class CreateTeamDto {
  @IsNotEmpty({ message: 'Vui lòng nhập tên team' })
  name: string
}