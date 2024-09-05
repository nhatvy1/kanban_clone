import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateTeamDto {
  @IsNotEmpty({ message: 'Please enter your team name' })
  name: string

  @IsOptional({ message: 'Vui lòng chọn người dùng' })
  @IsArray()
  @IsNumber({}, { each: true})
  users?: number[] = []
}