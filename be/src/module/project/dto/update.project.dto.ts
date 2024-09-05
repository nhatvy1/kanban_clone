import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateProjectDto {
  @IsNotEmpty({ message: 'Please enter your project name' })
  name: string

  @IsOptional({ message: 'Please enter your project description' })
  description: string
}