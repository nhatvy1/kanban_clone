export const STATUS_OPTIONS = [
  { value: 1, label: 'Approved' },
  { value: -1, label: 'Block' },
  { value: 0, label: 'Pending' }
]

export const USERS_STATUS_OPTIONS = [
  { value: 'ACTIVE', label: 'Approved' },
  { value: 'BLOCK', label: 'Block' },
  { value: 'INACTIVE', label: 'Pending' }
]

export const API_URL = 'http://localhost:5000/api/v1'

export const ERROR_STATUS = {
  AUTHENTICATION: 401,
  FORBIDDEN: 403
}