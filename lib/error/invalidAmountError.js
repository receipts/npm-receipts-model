class InvalidAmountError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidAmountError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidAmountError = InvalidAmountError;