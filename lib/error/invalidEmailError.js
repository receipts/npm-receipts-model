const util = require('util');

class InvalidEmailError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidEmailError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidEmailError = InvalidEmailError;