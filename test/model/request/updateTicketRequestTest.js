var chai = require('chai');
var should = chai.should();
var updateTicketRequest = require('../../../lib/model/request/updateTicketRequest');

describe('updateTicketRequest model test', function () {

  var pointOfSale = 'pointOfSale';
  var purchaseOrderNumber = 'purchaseOrderNumber';
  var amount = 'amount';
  var date = 'date';
  var taxRegistrationNumber = 'taxRegistrationNumber';
  var trade = 'trade';

  it('should create model', function (done) {

    var updateTicketRequestModel = new updateTicketRequest.UpdateTicketRequest(
      pointOfSale, 
      purchaseOrderNumber, 
      amount, 
      date, 
      taxRegistrationNumber, 
      trade
    );

    should.exist(updateTicketRequestModel);
    updateTicketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    updateTicketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    updateTicketRequestModel.amount.should.be.equal(amount);
    updateTicketRequestModel.date.should.be.equal(date);
    updateTicketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    updateTicketRequestModel.trade.should.be.equal(trade);
    done();
  });

  it('should create model by builder', function (done) {

    var updateTicketRequestModel = new updateTicketRequest.UpdateTicketRequestBuilder()
      .withPointOfSale(pointOfSale)
      .withPurchaseOrderNumber(purchaseOrderNumber)
      .withAmount(amount)
      .withDate(date)
      .withTaxRegistrationNumber(taxRegistrationNumber)
      .withTrade(trade)
      .build();

    should.exist(updateTicketRequestModel);
    updateTicketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    updateTicketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    updateTicketRequestModel.amount.should.be.equal(amount);
    updateTicketRequestModel.date.should.be.equal(date);
    updateTicketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    updateTicketRequestModel.trade.should.be.equal(trade);
    done();
  });

});
