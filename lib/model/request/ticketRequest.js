class TicketRequest {
  constructor(pointOfSale, purchaseOrderNumber, amount, date, taxRegistrationNumber, trade, phone, agreements, email) {
    this.pointOfSale = pointOfSale;
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.amount = amount;
    this.date = date;
    this.taxRegistrationNumber = taxRegistrationNumber;
    this.trade = trade;
    this.phone = phone;
    this.agreements = agreements;
    this.email = email;
  }
}

class TicketRequestBuilder {
  constructor() {
    this.pointOfSale = null;
    this.purchaseOrderNumber = null;
    this.amount = null;
    this.date = null;
    this.taxRegistrationNumber = null;
    this.trade = null;
    this.phone = null;
    this.agreements = null;
    this.email = null;
  }

  withPointOfSale(pointOfSale) {
    this.pointOfSale = pointOfSale;
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

  withTaxRegistrationNumber(taxRegistrationNumber) {
    this.taxRegistrationNumber = taxRegistrationNumber;
    return this;
  }

  withTrade(trade) {
    this.trade = trade;
    return this;
  }

  withPhone(phone) {
    this.phone = phone;
    return this;
  }

  withAgreements(agreements) {
    this.agreements = agreements;
    return this;
  }

  withEmail(email) {
    this.email = email;
    return this;
  }

  build() {
    return new TicketRequest(
      this.pointOfSale,
      this.purchaseOrderNumber,
      this.amount,
      this.date,
      this.taxRegistrationNumber,
      this.trade,
      this.phone,
      this.agreements,
      this.email
    );
  }
}

module.exports = exports = {
  TicketRequest: TicketRequest,
  TicketRequestBuilder: TicketRequestBuilder
};
