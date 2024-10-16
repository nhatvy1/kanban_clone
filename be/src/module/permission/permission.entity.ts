import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../role/role.entity'

export enum ActionEnum {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  MANAGE = 'manage'
}

export enum ModuleNameEnum {
  ALL = 'all',
  USER = 'user',
  ROLE = 'role',
  PROJECT = 'project'
}

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: String })
  subject: string

  @Column({ nullable: false, type: 'enum', enum: ActionEnum })
  action: ActionEnum

  @ManyToMany(() => Role, (role) => role.permission)
  role: Role[]
}
