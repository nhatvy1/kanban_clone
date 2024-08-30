import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Role } from '../role/role.entity'
import { Team } from '../team/team.entity'
import { Project } from '../project/project.entity'

export enum Status {
  ACTIVE = 1,
  INACTIVE = 0,
  BLOCK = -1
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column({ type: String, select: false, nullable: false })
  password: string

  @Column({ type: String })
  fullName: string

  @Column({
    default:
      'https://res.cloudinary.com/metavere/image/upload/v1695267123/ConBo_eij0q0.png'
  })
  avatar: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @Column({ type: Number, default: Status.INACTIVE })
  status: number

  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'role' })
  role: Role

  @ManyToOne(() => Team, (team) => team.users, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'team' })
  team: Team

  @OneToMany(() => Project, (project) => project.creators)
  projects: Project[]
}
