var TicketRequest = function TicketRequest(pointOfSale, purchaseOrderNumber, amount, date, taxRegistrationNumber, phone, trade, agreements) {
  this.pointOfSale = pointOfSale;
  this.purchaseOrderNumber = purchaseOrderNumber;
  this.amount = amount;
  this.date = date;
  this.taxRegistrationNumber = taxRegistrationNumber;
  this.phone = phone;
  this.trade = trade;
  this.agreements = agreements;
};

var TicketRequestBuilder = function TicketRequestBuilder() {
  this.pointOfSale = null;
  this.purchaseOrderNumber = null;
  this.amount = null;
  this.date = null;
  this.taxRegistrationNumber = null;
  this.phone = null;
  this.trade = null;
  this.agreements = null;

  var self = this;

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

  this.withPhone = function withPhone(phone) {
    self.phone = phone;
    return self;
  };

  this.withTrade = function withTrade(trade) {
    self.trade = trade;
    return self;
  };

  this.withAgreements = function withAgreements(agreements) {
    self.agreements = agreements;
    return self;
  };


  this.build = function build() {
    return new TicketRequest(
     self.pointOfSale, 
     self.purchaseOrderNumber, 
     self.amount, 
     self.date, 
     self.taxRegistrationNumber, 
     self.phone, 
     self.trade, 
     self.agreements
    );
  };

};

module.exports = exports = {
  TicketRequest: TicketRequest,
  TicketRequestBuilder: TicketRequestBuilder
};
