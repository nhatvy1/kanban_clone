import { IsNotEmpty, IsOptional } from "class-validator";
import { actionEnum } from "../role.entity";

export class UpdateRoleDto {
  @IsNotEmpty()
  name?: string

  @IsOptional()
  slug: string

  @IsNotEmpty() 
  permissions: { [key: string]: actionEnum[]}
}