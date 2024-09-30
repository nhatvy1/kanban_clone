import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { TransformInterceptor } from './transforms/transform.interceptor'
import { AllExceptionsFilter } from './interceptors/all-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    credentials: true
  })

  const reflector = app.get(Reflector)
  const httpAdapterHost = app.get(HttpAdapterHost)

  app.useGlobalInterceptors(new TransformInterceptor(reflector))
  app.useGlobalFilters(new AllExceptionsFilter())

  app.setGlobalPrefix('api/v1')

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const PORT = app.get('PORT') || 8080
  await app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
}
bootstrap()
