import { IsNotEmpty, IsOptional } from "class-validator";
import { ActionEnum } from "src/module/permission/permission.entity";
import { ValidateEnumRole } from "../validations/validate.enum.role.validation";

export class UpdateRoleDto {
  @IsNotEmpty()
  name?: string

  @IsOptional()
  slug: string

  @IsNotEmpty() 
  @ValidateEnumRole()
  permissions: { [key: string]: ActionEnum[]}
}