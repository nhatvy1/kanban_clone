import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { IsExistedRole } from "../validations/is-existed-role.validation";

export class CheckRoleDto {
  @IsExistedRole()
  @Type(()=> Number)
  @IsNotEmpty()
  id: number
}