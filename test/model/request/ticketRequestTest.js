const chai = require('chai');
const should = chai.should();
const ticketRequest = require('../../../lib/model/request/ticketRequest');

describe('ticketRequest model test', () => {

  const pointOfSale = 'pointOfSale';
  const purchaseOrderNumber = 'purchaseOrderNumber';
  const amount = 'amount';
  const date = 'date';
  const taxRegistrationNumber = 'taxRegistrationNumber';
  const trade = 'trade';
  const phone = 'phone';
  const agreements = 'agreements';
  const email = 'email';

  it('should create model', done => {

    const ticketRequestModel = new ticketRequest.TicketRequest(
      pointOfSale,
      purchaseOrderNumber,
      amount,
      date,
      taxRegistrationNumber,
      trade,
      phone,
      agreements,
      email
    );

    should.exist(ticketRequestModel);
    ticketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    ticketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketRequestModel.amount.should.be.equal(amount);
    ticketRequestModel.date.should.be.equal(date);
    ticketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    ticketRequestModel.trade.should.be.equal(trade);
    ticketRequestModel.phone.should.be.equal(phone);
    ticketRequestModel.agreements.should.be.equal(agreements);
    ticketRequestModel.email.should.be.equal(email);
    done();
  });

  it('should create model by builder', function (done) {

    const ticketRequestModel = new ticketRequest.TicketRequestBuilder()
      .withPointOfSale(pointOfSale)
      .withPurchaseOrderNumber(purchaseOrderNumber)
      .withAmount(amount)
      .withDate(date)
      .withTaxRegistrationNumber(taxRegistrationNumber)
      .withTrade(trade)
      .withPhone(phone)
      .withAgreements(agreements)
      .withEmail(email)
      .build();

    should.exist(ticketRequestModel);
    ticketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    ticketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketRequestModel.amount.should.be.equal(amount);
    ticketRequestModel.date.should.be.equal(date);
    ticketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    ticketRequestModel.trade.should.be.equal(trade);
    ticketRequestModel.phone.should.be.equal(phone);
    ticketRequestModel.agreements.should.be.equal(agreements);
    ticketRequestModel.email.should.be.equal(email);
    done();
  });

});
