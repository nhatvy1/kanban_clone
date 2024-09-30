import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { RESPONSE_MESSAGE } from 'src/decorators/response.message.decorator'

export interface Response<T> {
  statusCode: number
  message?: string
  result: T
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((result) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: this.reflector.get<string>(
          RESPONSE_MESSAGE,
          context.getHandler()
        ),
        result
      }))
    )
  }
}
