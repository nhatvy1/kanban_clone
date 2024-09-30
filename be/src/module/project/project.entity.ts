import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { User } from '../user/user.entity'
import { List } from '../list/list.entity'

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

  @OneToMany(()=> List, (list)=> list.project)
  lists: List[]

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date
}
