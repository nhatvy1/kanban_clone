import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './database/typeorm.config'
import { UserModule } from './module/user/user.module'
import { RoleModule } from './module/role/role.module'
import { PermissionModule } from './module/permission/permission.module'
import { TeamModule } from './module/team/team.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig
    }),
    UserModule,
    RoleModule,
    PermissionModule,
    TeamModule
  ],
  controllers: [],
  providers: [{ provide: 'PORT', useValue: 5001 }]
})
export class AppModule {}
