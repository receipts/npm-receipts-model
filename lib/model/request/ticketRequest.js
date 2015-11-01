var TicketRequest = function TicketRequest(pointOfSale, purchaseOrderNumber, amount, date, taxRegistrationNumber, trade, phone, agreements, email) {
  this.pointOfSale = pointOfSale;
  this.purchaseOrderNumber = purchaseOrderNumber;
  this.amount = amount;
  this.date = date;
  this.taxRegistrationNumber = taxRegistrationNumber;
  this.trade = trade;
  this.phone = phone;
  this.agreements = agreements;
  this.email = email;
};

var TicketRequestBuilder = function TicketRequestBuilder() {
  this.pointOfSale = null;
  this.purchaseOrderNumber = null;
  this.amount = null;
  this.date = null;
  this.taxRegistrationNumber = null;
  this.trade = null;
  this.phone = null;
  this.agreements = null;
  this.email = null;

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

  this.withTrade = function withTrade(trade) {
    self.trade = trade;
    return self;
  };

  this.withPhone = function withPhone(phone) {
    self.phone = phone;
    return self;
  };

  this.withAgreements = function withAgreements(agreements) {
    self.agreements = agreements;
    return self;
  };

  this.withEmail = function withEmail(email) {
    self.email = email;
    return self;
  };


  this.build = function build() {
    return new TicketRequest(
     self.pointOfSale, 
     self.purchaseOrderNumber, 
     self.amount, 
     self.date, 
     self.taxRegistrationNumber, 
     self.trade, 
     self.phone, 
     self.agreements, 
     self.email
    );
  };

};

module.exports = exports = {
  TicketRequest: TicketRequest,
  TicketRequestBuilder: TicketRequestBuilder
};
