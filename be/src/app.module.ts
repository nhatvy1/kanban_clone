import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './database/typeorm.config'
import { UserModule } from './module/user/user.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig
    }),
    UserModule
  ],
  controllers: [],
  providers: [{ provide: 'PORT', useValue: 7000 }]
})
export class AppModule {}
