import { CustomError } from './custom-error';

export class RequestTimeoutError extends CustomError {
  statusCode = 408;
  reason = 'Request Timeout';

  constructor() {
    super('408 Request Timeout');

    Object.setPrototypeOf(this, RequestTimeoutError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
