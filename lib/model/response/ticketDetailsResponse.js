var TicketDetailsResponse = function TicketDetailsResponse(id,
                                             code,
                                             purchaseOrderNumber,
                                             amount,
                                             date,
                                             pointOfSale,
                                             taxRegistrationNumber,
                                             trade) {
  this.id = id;
  this.code = code;
  this.purchaseOrderNumber = purchaseOrderNumber;
  this.amount = amount;
  this.date = date;
  this.pointOfSale = pointOfSale;
  this.taxRegistrationNumber = taxRegistrationNumber;
  this.trade = trade;
};

var TicketDetailsResponseBuilder = function TicketDetailsResponseBuilder() {
  this.id = null;
  this.code = null;
  this.purchaseOrderNumber = null;
  this.amount = null;
  this.date = null;
  this.pointOfSale = null;
  this.taxRegistrationNumber = null;
  this.trade = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withCode = function withCode(code) {
    self.code = code;
    return self;
  };

  this.withPurchaseOrderNumber = function withPurchaseOrderNumber(purchaseOrderNumber) {
    self.purchaseOrderNumber = purchaseOrderNumber;
    return self;
  };

  this.withAmount = function withAmount(amount) {
    self.amount = amount;
    return self;
  };

  this.withDate = function withDate(date) {
    self.date = date;
    return self;
  };

  this.withPointOfSale = function withPointOfSale(pointOfSale) {
    self.pointOfSale = pointOfSale;
    return self;
  };

  this.withTaxRegistrationNumber = function withTaxRegistrationNumber(taxRegistrationNumber) {
    self.taxRegistrationNumber = taxRegistrationNumber;
    return self;
  };

  this.withTrade = function withTrade(trade) {
    self.trade = trade;
    return self;
  };

  this.build = function build() {
    return new TicketDetailsResponse(
      self.id,
      self.code,
      self.purchaseOrderNumber,
      self.amount,
      self.date,
      self.pointOfSale,
      self.taxRegistrationNumber,
      self.trade
    );
  };

};

module.exports = exports = {
  TicketDetailsResponse: TicketDetailsResponse,
  TicketDetailsResponseBuilder: TicketDetailsResponseBuilder
};
