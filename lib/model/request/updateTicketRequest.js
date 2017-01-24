class UpdateTicketRequest {
  constructor(purchaseOrderNumber, amount, date, pointOfSale, taxRegistrationNumber, trade) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.amount = amount;
    this.date = date;
    this.pointOfSale = pointOfSale;
    this.taxRegistrationNumber = taxRegistrationNumber;
    this.trade = trade;
  }
}

class UpdateTicketRequestBuilder {
  constructor() {
    this.purchaseOrderNumber = null;
    this.amount = null;
    this.date = null;
    this.pointOfSale = null;
    this.taxRegistrationNumber = null;
    this.trade = null;
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
    return new UpdateTicketRequest(
      this.purchaseOrderNumber,
      this.amount,
      this.date,
      this.pointOfSale,
      this.taxRegistrationNumber,
      this.trade
    );
  }
}

module.exports = exports = {
  UpdateTicketRequest: UpdateTicketRequest,
  UpdateTicketRequestBuilder: UpdateTicketRequestBuilder
};
