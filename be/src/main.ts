import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { TransformInterceptor } from './transforms/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    credentials: true
  })

  const reflector = app.get(Reflector);

  app.useGlobalInterceptors(new TransformInterceptor(reflector));

  app.setGlobalPrefix('api/v1')

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const PORT = app.get('PORT') || 8080
  await app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
}
bootstrap()
