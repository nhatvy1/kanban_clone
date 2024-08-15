import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { JwtPayload } from './interface/jwt.payload'
import { TokenVerify, Tokens } from './interface/token'
import { JwtService } from '@nestjs/jwt'
import { Hash } from 'src/utils/hash'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto) {
    try {
      const user = await this.userService.getUserLogin(loginDto.email)
      const isValidPassword = Hash.compare(loginDto.password, user.password)

      if (!isValidPassword) {
        throw new UnauthorizedException('Email or password incorrect')
      }
      const { access_token, refresh_token }: Tokens = await this.generateToken(
        user.id,
        user.role.slug
      )

      delete user.password
      return { user, access_token, refresh_token }
    } catch (e) {
      throw e
    }
  }

  async register(registerDto: RegisterDto) {
    try {
      const user = await this.userService.register(registerDto)
      return user
    } catch (e) {
      throw e
    }
  }

  async generateToken(userId: number, role: string): Promise<Tokens> {
    const payload: JwtPayload = { userId, role }
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_JWT_SECRET,
        expiresIn: process.env.REFRESH_JWT_EXPIRES
      })
    ])

    return { access_token: access_token, refresh_token: refresh_token }
  }

  async refreshToken(tokenVerify: TokenVerify) {
    const { access_token, refresh_token } = await this.generateToken(
      tokenVerify.userId,
      tokenVerify.role
    )
    return { access_token, refresh_token }
  }
}
