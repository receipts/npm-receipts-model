

class InvalidPhoneError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidPhoneError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidPhoneError = InvalidPhoneError;