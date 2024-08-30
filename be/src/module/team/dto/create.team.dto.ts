import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTeamDto {
  @IsNotEmpty({ message: 'Please enter your team name' })
  name: string

  @IsOptional({ message: 'Vui lòng chọn người dùng' })
  users: number[]
}