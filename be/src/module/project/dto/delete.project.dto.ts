import { Type } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'
import { IsExistedProject } from '../validations/is-existed-project.validation'

export class DeleteProjectDto {
  @IsNotEmpty()
  @IsExistedProject()
  @Type(() => Number)
  id: number
}
