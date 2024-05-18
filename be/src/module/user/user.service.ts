import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async checkEmail(email: string) {
    try {
      const result = await this.userRepository.findOneBy({ email })
      return result
    } catch (e) {
      throw new NotFoundException(`Email doesn't exist`)
    }
  }

}
