import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class FilterUserDto {
  @IsOptional()
  search?: string = ''

  @IsOptional()
  @IsInt()
  status: number

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number = 10

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number = 1
}