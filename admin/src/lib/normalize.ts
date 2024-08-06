/**
 *
 * Delete the first character of the path
 */

export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}