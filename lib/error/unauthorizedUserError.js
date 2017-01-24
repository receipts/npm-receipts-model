const util = require('util');

class UnauthorizedUserError extends Error {
  constructor(message) {
    super();
    this.name = 'UnauthorizedUserError';
    this.message = message;
  }
}

module.exports.UnauthorizedUserError = UnauthorizedUserError;