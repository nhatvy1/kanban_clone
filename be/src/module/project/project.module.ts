import { Module } from '@nestjs/common'
import { ProjectService } from './project.service'
import { ProjectController } from './project.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Project } from './project.entity'
import { UserModule } from '../user/user.module'
import { IsNotExistedProjectNameConstraint } from './validations/is-not-existed-project-name.validation'
import { IsExistedProjectConstraint } from './validations/is-existed-project.validation'

@Module({
  imports: [TypeOrmModule.forFeature([Project]), UserModule],
  controllers: [ProjectController],
  providers: [
    ProjectService,
    IsNotExistedProjectNameConstraint,
    IsExistedProjectConstraint
  ],
  exports: [ProjectService]
})
export class ProjectModule {}
