class TicketDetailsResponse {
  constructor(id, code, purchaseOrderNumber, amount, date, special, pointOfSale, taxRegistrationNumber, trade) {
    this.id = id;
    this.code = code;
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.amount = amount;
    this.date = date;
    this.special = special;
    this.pointOfSale = pointOfSale;
    this.taxRegistrationNumber = taxRegistrationNumber;
    this.trade = trade;
  }
}

class TicketDetailsResponseBuilder {
  constructor() {
    this.id = null;
    this.code = null;
    this.purchaseOrderNumber = null;
    this.amount = null;
    this.date = null;
    this.special = null;
    this.pointOfSale = null;
    this.taxRegistrationNumber = null;
    this.trade = null;
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

  withPointOfSale(pointOfSale) {
    this.pointOfSale = pointOfSale;
    return this;
  }

  withTaxRegistrationNumber(taxRegistrationNumber) {
    this.taxRegistrationNumber = taxRegistrationNumber;
    return this;
  }

  withTrade(trade) {
    this.trade = trade;
    return this;
  }

  build() {
    return new TicketDetailsResponse(
      this.id,
      this.code,
      this.purchaseOrderNumber,
      this.amount,
      this.date,
      this.special,
      this.pointOfSale,
      this.taxRegistrationNumber,
      this.trade
    );
  }
}

module.exports = exports = {
  TicketDetailsResponse: TicketDetailsResponse,
  TicketDetailsResponseBuilder: TicketDetailsResponseBuilder
};
