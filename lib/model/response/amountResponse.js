class AmountResponse {
  constructor(currency, value) {
    this.currency = currency;
    this.value = value;
  }
}

class AmountResponseBuilder {
  constructor() {
    this.currency = null;
    this.value = null;
  }

  withCurrency(currency) {
    this.currency = currency;
    return this;
  }

  withValue(value) {
    this.value = value;
    return this;
  }

  build() {
    return new AmountResponse(
      this.currency,
      this.value
    );
  }
}

module.exports = exports = {
  AmountResponse: AmountResponse,
  AmountResponseBuilder: AmountResponseBuilder
};
