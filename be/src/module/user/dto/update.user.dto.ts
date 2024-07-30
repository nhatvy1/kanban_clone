import { IsOptional } from "class-validator";

export class UpdateUserDto {
  @IsOptional({ message: 'Please enter your fullname' })
  fullName: string

  @IsOptional({ message: 'Please select a role' })
  role: number
}