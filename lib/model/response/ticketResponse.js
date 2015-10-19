var TicketResponse = function TicketResponse(id, purchaseOrderNumber, amount, date, createdAt, updatedAt) {
  this.id = id;
  this.purchaseOrderNumber = purchaseOrderNumber;
  this.amount = amount;
  this.date = date;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var TicketResponseBuilder = function TicketResponseBuilder() {
  this.id = null;
  this.purchaseOrderNumber = null;
  this.amount = null;
  this.date = null;
  this.createdAt = null;
  this.updatedAt = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
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

  this.withCreatedAt = function withCreatedAt(createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.withUpdatedAt = function withUpdatedAt(updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };


  this.build = function build() {
    return new TicketResponse(
     self.id, 
     self.purchaseOrderNumber, 
     self.amount, 
     self.date, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = exports = {
  TicketResponse: TicketResponse,
  TicketResponseBuilder: TicketResponseBuilder
};
