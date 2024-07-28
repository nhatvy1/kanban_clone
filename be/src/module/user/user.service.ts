import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async checkEmail(email: string) {
    try {
      const existEmail = await this.userRepository.findOneBy({ email })
      if(!existEmail) {
        throw new NotFoundException(`Email hoặc mật khẩu không chính xác`)
      } 
      return existEmail
    } catch (e) {
      throw e
    }
  }

  async getUserLogin(email: string) {
    try {
      const user = await this.userRepository.findOneBy({ email })
      if(!user) {
        throw new NotFoundException(`Email hoặc mật khẩu không chính xác`)
      } 
      return user
    } catch(e) {
      throw e
    }
  }
}
