var chai = require('chai');
var should = chai.should();
var ticketRequest = require('../../../lib/model/request/ticketRequest');

describe('ticketRequest model test', function () {

  var pointOfSale = 'pointOfSale';
  var purchaseOrderNumber = 'purchaseOrderNumber';
  var amount = 'amount';
  var date = 'date';
  var taxRegistrationNumber = 'taxRegistrationNumber';
  var phone = 'phone';
  var trade = 'trade';
  var agreements = 'agreements';
  var email = 'email';

  it('should create model', function (done) {

    var ticketRequestModel = new ticketRequest.TicketRequest(
      pointOfSale, 
      purchaseOrderNumber, 
      amount, 
      date, 
      taxRegistrationNumber, 
      phone, 
      trade, 
      agreements, 
      email
    );

    should.exist(ticketRequestModel);
    ticketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    ticketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketRequestModel.amount.should.be.equal(amount);
    ticketRequestModel.date.should.be.equal(date);
    ticketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    ticketRequestModel.phone.should.be.equal(phone);
    ticketRequestModel.trade.should.be.equal(trade);
    ticketRequestModel.agreements.should.be.equal(agreements);
    ticketRequestModel.email.should.be.equal(email);
    done();
  });

  it('should create model by builder', function (done) {

    var ticketRequestModel = new ticketRequest.TicketRequestBuilder()
      .withPointOfSale(pointOfSale)
      .withPurchaseOrderNumber(purchaseOrderNumber)
      .withAmount(amount)
      .withDate(date)
      .withTaxRegistrationNumber(taxRegistrationNumber)
      .withPhone(phone)
      .withTrade(trade)
      .withAgreements(agreements)
      .withEmail(email)
      .build();

    should.exist(ticketRequestModel);
    ticketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    ticketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketRequestModel.amount.should.be.equal(amount);
    ticketRequestModel.date.should.be.equal(date);
    ticketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    ticketRequestModel.phone.should.be.equal(phone);
    ticketRequestModel.trade.should.be.equal(trade);
    ticketRequestModel.agreements.should.be.equal(agreements);
    ticketRequestModel.email.should.be.equal(email);
    done();
  });

});
