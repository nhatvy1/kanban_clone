import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../role/role.entity";

export enum actionEnum {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  MANAGE = 'manage',
}

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: String })
  subject: string

  @Column({ nullable: false, type: 'enum', enum: actionEnum })
  action: actionEnum

  @ManyToMany(()=> Role, (role)=> role.permission)
  role: Role[]
}