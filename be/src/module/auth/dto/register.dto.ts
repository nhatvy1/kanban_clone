import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class RegisterDto {
  @IsNotEmpty({ message: 'Please enter your email' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string

  @IsNotEmpty({ message: 'Please enter your password' })
  password: string

  @IsNotEmpty({ message: 'Please enter your fullname' })
  fullName: string
}
