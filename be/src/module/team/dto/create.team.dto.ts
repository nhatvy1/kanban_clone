import { IsNotEmpty } from "class-validator";

export class CreateTeamDto {
  @IsNotEmpty({ message: 'Please enter your team name' })
  name: string
}