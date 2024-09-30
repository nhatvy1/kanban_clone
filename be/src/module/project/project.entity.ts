import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { User } from '../user/user.entity'

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false })
  name: string

  @Column({ type: String, nullable: true })
  description: string

  @ManyToOne(() => User, (user) => user.projects)
  creator: User

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date
}
