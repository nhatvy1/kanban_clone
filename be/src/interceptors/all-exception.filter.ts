import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  // private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    if(exception instanceof HttpException) {
      const status = exception.getStatus()
      const errorResponse = {
        statusCode: status,
        message: exception.getResponse()
      }
      response.status(status).json(errorResponse.message)
    } else if (exception instanceof HttpException) {
      const status = exception.getStatus()
      const errorResponse = {
        statusCode: status,
        message: exception.message
      }
      response.status(status).json(errorResponse)
    } else {
      const status = HttpStatus.INTERNAL_SERVER_ERROR
      const errorResponse = {
        statusCode: status,
        message: exception?.message
      }
      response.status(status).json(errorResponse)
    }
  }
}
