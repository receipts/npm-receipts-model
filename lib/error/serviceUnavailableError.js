

class ServiceUnavailableError extends Error {
  constructor(message, userMessage) {
    super();
    this.name = 'ServiceUnavailableError';
    this.message = message;
    this.userMessage = userMessage;
  }
}

module.exports.ServiceUnavailableError = ServiceUnavailableError;