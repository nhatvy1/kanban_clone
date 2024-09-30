import { SetMetadata } from '@nestjs/common'

export const RESPONSE_MESSAGE = 'message_response'
export const RessponseMessage = (message: string) =>
  SetMetadata(RESPONSE_MESSAGE, message)
