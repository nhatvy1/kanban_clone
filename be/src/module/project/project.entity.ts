import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
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
  creators: User

  @OneToMany(() => User, (user) => user.participatedProjects)
  participants: User[];
}
