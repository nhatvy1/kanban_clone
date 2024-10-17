import { Transform } from 'class-transformer'

export function TrimAllSpaces() {
  return Transform(({ value }) =>
    typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value
  )
}
