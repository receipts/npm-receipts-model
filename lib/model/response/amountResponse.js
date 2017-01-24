const AmountResponse = function AmountResponse(currency, value) {
  this.currency = currency;
  this.value = value;
};

const AmountResponseBuilder = function AmountResponseBuilder() {
  this.currency = null;
  this.value = null;

  const self = this;

  this.withCurrency = function withCurrency(currency) {
    self.currency = currency;
    return self;
  };

  this.withValue = function withValue(value) {
    self.value = value;
    return self;
  };


  this.build = function build() {
    return new AmountResponse(
     self.currency, 
     self.value
    );
  };

};

module.exports = exports = {
  AmountResponse: AmountResponse,
  AmountResponseBuilder: AmountResponseBuilder
};
