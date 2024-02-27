import BaseError from './BaseError'
import { internalError, httpStatus } from '@/constants/errors'

class InternalError extends BaseError {
  internalError: object | string

  constructor(error: Error, code = internalError.code, message = internalError.msg) {
    super(code, internalError.reason, httpStatus.INTERNAL_SERVER, message)
    this.internalError = error
  }
}

export default InternalError
