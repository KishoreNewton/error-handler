import { CustomError } from './custom-error';

export class ForbiddenError extends CustomError {
  statusCode = 403;
  reason = '403 Forbidden Resource';

  constructor() {
    super('403 Forbidden Resource');

    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
