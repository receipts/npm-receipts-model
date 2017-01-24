const UpdateTicketRequest = function UpdateTicketRequest(pointOfSale,
                                                       purchaseOrderNumber,
                                                       amount,
                                                       date,
                                                       taxRegistrationNumber,
                                                       trade) {
  this.pointOfSale = pointOfSale;
  this.purchaseOrderNumber = purchaseOrderNumber;
  this.amount = amount;
  this.date = date;
  this.taxRegistrationNumber = taxRegistrationNumber;
  this.trade = trade;
};

const UpdateTicketRequestBuilder = function UpdateTicketRequestBuilder() {
  this.pointOfSale = null;
  this.purchaseOrderNumber = null;
  this.amount = null;
  this.date = null;
  this.taxRegistrationNumber = null;
  this.trade = null;

  const self = this;

  this.withPointOfSale = function withPointOfSale(pointOfSale) {
    self.pointOfSale = pointOfSale;
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

  this.withTaxRegistrationNumber = function withTaxRegistrationNumber(taxRegistrationNumber) {
    self.taxRegistrationNumber = taxRegistrationNumber;
    return self;
  };

  this.withTrade = function withTrade(trade) {
    self.trade = trade;
    return self;
  };

  this.build = function build() {
    return new UpdateTicketRequest(
      self.pointOfSale,
      self.purchaseOrderNumber,
      self.amount,
      self.date,
      self.taxRegistrationNumber,
      self.trade
    );
  };

};

module.exports = exports = {
  UpdateTicketRequest: UpdateTicketRequest,
  UpdateTicketRequestBuilder: UpdateTicketRequestBuilder
};
