import { CustomError } from './custom-error';

export class NotImplementedError extends CustomError {
  statusCode = 501;
  reason = 'Not Implemented';
//   Retry-After  - optional header

  constructor() {
    super('408 Request Timeout');

    Object.setPrototypeOf(this, NotImplementedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
