import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { TrimAllSpaces } from 'src/utils/trim-all-spaces'

export class CreateProjectDto {
  @TrimAllSpaces()
  @IsString()
  @IsNotEmpty({ message: 'Please enter your project name' })
  name: string

  @TrimAllSpaces()
  @IsString()
  @IsOptional({ message: 'Please enter your project description' })
  description: string
}
