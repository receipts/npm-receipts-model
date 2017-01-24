const util = require('util');

class InvalidTradeError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidTradeError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidTradeError = InvalidTradeError;