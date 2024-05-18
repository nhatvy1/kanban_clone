import { HttpStatus } from "@nestjs/common"

interface Response<T> {
  message: string
  statusCode: HttpStatus
  result?: T
}

export const Response = <T>({
  message,
  statusCode,
  result
}: Response<T>)=> {
  return {
    statusCode: statusCode,
    message: message,
    result: result || {}
  }
}