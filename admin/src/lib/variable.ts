export const USERS_STATUS_OPTIONS = [
  { id: 1, value: 'ACTIVE', label: 'Approved', status: 1 },
  { id: 2, value: 'BLOCK', label: 'Block', status: -1 },
  { id: 3, value: 'INACTIVE', label: 'Pending', status: 0 }
]

export const API_URL = 'http://localhost:5000/api/v1'

export const ERROR_STATUS = {
  AUTHENTICATION: 401,
  FORBIDDEN: 403,
  SUCCESS: 200
}
