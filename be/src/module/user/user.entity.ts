import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum Status {
  ACTIVE = 1,
  INACTIVE = 0,
  BLOCK = -1,
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
      'https://res.cloudinary.com/metavere/image/upload/v1695267123/ConBo_eij0q0.png',
  })
  avatar: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @Column({ type: Number, default: Status.INACTIVE })
  status: number
  
}