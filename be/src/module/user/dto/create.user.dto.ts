import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty({ message: 'Please enter your email' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string

  @IsNotEmpty({ message: 'Please enter your password' })
  password: string

  @IsNotEmpty({ message: 'Please enter your fullname' })
  fullName: string

  @IsOptional({ message: 'Please a select a role' })
  status: string

  @IsOptional({ message: 'Please a select a role' })
  role: number
}
