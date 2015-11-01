var TicketResponse = function TicketResponse(id, code, purchaseOrderNumber, amount, date) {
  this.id = id;
  this.code = code;
  this.purchaseOrderNumber = purchaseOrderNumber;
  this.amount = amount;
  this.date = date;
};

var TicketResponseBuilder = function TicketResponseBuilder() {
  this.id = null;
  this.code = null;
  this.purchaseOrderNumber = null;
  this.amount = null;
  this.date = null;

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


  this.build = function build() {
    return new TicketResponse(
     self.id, 
     self.code, 
     self.purchaseOrderNumber, 
     self.amount, 
     self.date
    );
  };

};

module.exports = exports = {
  TicketResponse: TicketResponse,
  TicketResponseBuilder: TicketResponseBuilder
};
