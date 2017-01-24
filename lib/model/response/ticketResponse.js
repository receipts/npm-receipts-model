class TicketResponse {
  constructor(id, code, purchaseOrderNumber, amount, date, special) {
    this.id = id;
    this.code = code;
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.amount = amount;
    this.date = date;
    this.special = special;
  }
}

class TicketResponseBuilder {
  constructor() {
    this.id = null;
    this.code = null;
    this.purchaseOrderNumber = null;
    this.amount = null;
    this.date = null;
    this.special = null;
  }

  withId(id) {
    this.id = id;
    return this;
  }

  withCode(code) {
    this.code = code;
    return this;
  }

  withPurchaseOrderNumber(purchaseOrderNumber) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    return this;
  }

  withAmount(amount) {
    this.amount = amount;
    return this;
  }

  withDate(date) {
    this.date = date;
    return this;
  }

  withSpecial(special) {
    this.special = special;
    return this;
  }

  build() {
    return new TicketResponse(
      this.id,
      this.code,
      this.purchaseOrderNumber,
      this.amount,
      this.date,
      this.special
    );
  }
}

module.exports = exports = {
  TicketResponse: TicketResponse,
  TicketResponseBuilder: TicketResponseBuilder
};
