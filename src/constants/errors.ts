import config from '@/config'

const { email } = config

export const httpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500
}

export const internalError = {
  code: 'ERR-500',
  msg: `Internal error. Please try again. If the problem persists, please contact the support group ${email}`,
  reason: 'Internal Server Error',
  status: httpStatus.INTERNAL_SERVER
}

export const badRequestError = {
  code: 'ERR-400',
  msg: 'Invalid request',
  reason: 'Bad Request Error',
  status: httpStatus.BAD_REQUEST
}

export const dbError = {
  code: 'ERR-500',
  msg: `Database error. Please try again. If the problem persists, please contact the support group ${email}`
}
