

class UnknownValidateError extends Error {
  constructor(message, userMessage) {
    super();
    this.name = 'UnknownValidateError';
    this.message = message;
    this.userMessage = userMessage;
  }
}

module.exports.UnknownValidateError = UnknownValidateError;