import { SetMetadata } from '@nestjs/common'

export const RESPONSE_MESSAGE = 'message_response'
export const ResponseMessage = (message: string) =>
  SetMetadata(RESPONSE_MESSAGE, message)
