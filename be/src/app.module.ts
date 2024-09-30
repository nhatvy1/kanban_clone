import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './database/typeorm.config'
import { UserModule } from './module/user/user.module'
import { RoleModule } from './module/role/role.module'
import { PermissionModule } from './module/permission/permission.module'
import { AuthModule } from './module/auth/auth.module'
import { ProjectModule } from './module/project/project.module'
import { ListModule } from './module/list/list.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig
    }),
    UserModule,
    AuthModule,
    RoleModule,
    ProjectModule,
    ListModule,
    PermissionModule,
  ],
  controllers: [],
  providers: [{ provide: 'PORT', useValue:  5000 }]
})
export class AppModule {}
