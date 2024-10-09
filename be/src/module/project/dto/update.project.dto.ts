import { IsNotEmpty, IsOptional } from "class-validator";
import { IsNotExistedProjectName } from "../validations/is-not-existed-project-name.validation";

export class UpdateProjectDto {
  @IsNotEmpty({ message: 'Please enter your project name' })
  @IsNotExistedProjectName()
  name: string

  @IsOptional({ message: 'Please enter your project description' })
  description: string
}