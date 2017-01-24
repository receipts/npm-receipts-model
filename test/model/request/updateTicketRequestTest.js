const chai = require('chai');
const should = chai.should();
const updateTicketRequest = require('../../../lib/model/request/updateTicketRequest');

describe('updateTicketRequest model test', () => {

  const purchaseOrderNumber = 'purchaseOrderNumber';
  const amount = 'amount';
  const date = 'date';
  const pointOfSale = 'pointOfSale';
  const taxRegistrationNumber = 'taxRegistrationNumber';
  const trade = 'trade';

  it('should create model', done => {

    const updateTicketRequestModel = new updateTicketRequest.UpdateTicketRequest(
      purchaseOrderNumber,
      amount,
      date,
      pointOfSale,
      taxRegistrationNumber,
      trade
    );

    should.exist(updateTicketRequestModel);
    updateTicketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    updateTicketRequestModel.amount.should.be.equal(amount);
    updateTicketRequestModel.date.should.be.equal(date);
    updateTicketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    updateTicketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    updateTicketRequestModel.trade.should.be.equal(trade);
    done();
  });

  it('should create model by builder', function (done) {

    const updateTicketRequestModel = new updateTicketRequest.UpdateTicketRequestBuilder()
      .withPurchaseOrderNumber(purchaseOrderNumber)
      .withAmount(amount)
      .withDate(date)
      .withPointOfSale(pointOfSale)
      .withTaxRegistrationNumber(taxRegistrationNumber)
      .withTrade(trade)
      .build();

    should.exist(updateTicketRequestModel);
    updateTicketRequestModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    updateTicketRequestModel.amount.should.be.equal(amount);
    updateTicketRequestModel.date.should.be.equal(date);
    updateTicketRequestModel.pointOfSale.should.be.equal(pointOfSale);
    updateTicketRequestModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    updateTicketRequestModel.trade.should.be.equal(trade);
    done();
  });

});
