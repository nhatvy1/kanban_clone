import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

export interface Response<T> {
  statusCode: number
  message?: string
  result: T
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context))
      )
    )
  }

  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp()
    const response = ctx.getResponse()

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      result: exception
    })
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp()
    const response = ctx.getResponse()
    const statusCode = response.statusCode

    console.log('Check')

    return {
      statusCode,
      result: res || {}
    }
  }
}
