import { IsEmail, IsNotEmpty } from 'class-validator'

export class LoginDto {
  @IsNotEmpty({ message: 'Vui lòng nhập email' })
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  email: string

  @IsNotEmpty({ message: 'Vui lòng nhập mật khẩu' })
  password: string
}
