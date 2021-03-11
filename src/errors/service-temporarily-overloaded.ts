import { CustomError } from './custom-error';

export class ServiceTemporarilyOverloaded extends CustomError {
  statusCode = 502;
  reason = 'Server congestion. Service Temporarily Unavailable';

  constructor() {
    super('Server congestion. Service Temporarily Unavailable');

    Object.setPrototypeOf(this, ServiceTemporarilyOverloaded.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
