const util = require('util');

class AlreadyExistsError extends Error {
  constructor(message, userMessage) {
    super();
    this.name = 'AlreadyExistsError';
    this.message = message;
    this.userMessage = userMessage;
  }
}

module.exports.AlreadyExistsError = AlreadyExistsError;