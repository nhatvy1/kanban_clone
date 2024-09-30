import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "../project/project.entity";

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, nullable: false })
  name: string

  @Column({ type: String, nullable: false })
  position: string

  @ManyToOne(() => Project, (project) => project.lists)
  project: Project
}