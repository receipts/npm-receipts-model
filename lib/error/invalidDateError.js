

class InvalidDateError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidDateError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidDateError = InvalidDateError;