import { CustomError } from './custom-error';

export class DnsLookupError extends CustomError {
  statusCode = 502;
  reason = 'DNS lookup failed';

  constructor() {
    super('Server congestion. Service Temporarily Unavailable');

    Object.setPrototypeOf(this, DnsLookupError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
