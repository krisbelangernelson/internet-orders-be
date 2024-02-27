import { httpStatus } from '@/constants/errors'
import BaseError from './BaseError'

class ConflictError extends BaseError {
  constructor(
    param: string | undefined,
    value: string | undefined,
    code: string | undefined = `ERR-${httpStatus.CONFLICT}`,
    message: string
  ) {
    super(code, 'Duplicate', httpStatus.CONFLICT, message ?? `${param} [${value}] already exists.`)
  }
}
export default ConflictError
