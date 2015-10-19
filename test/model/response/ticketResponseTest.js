var chai = require('chai');
var should = chai.should();
var ticketResponse = require('../../../lib/model/response/ticketResponse');

describe('ticketResponse model test', function () {

  var id = 'id';
  var purchaseOrderNumber = 'purchaseOrderNumber';
  var amount = 'amount';
  var date = 'date';
  var createdAt = 'createdAt';
  var updatedAt = 'updatedAt';

  it('should create model', function (done) {

    var ticketResponseModel = new ticketResponse.TicketResponse(
      id, 
      purchaseOrderNumber, 
      amount, 
      date, 
      createdAt, 
      updatedAt
    );

    should.exist(ticketResponseModel);
    ticketResponseModel.id.should.be.equal(id);
    ticketResponseModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketResponseModel.amount.should.be.equal(amount);
    ticketResponseModel.date.should.be.equal(date);
    ticketResponseModel.createdAt.should.be.equal(createdAt);
    ticketResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

  it('should create model by builder', function (done) {

    var ticketResponseModel = new ticketResponse.TicketResponseBuilder()
      .withId(id)
      .withPurchaseOrderNumber(purchaseOrderNumber)
      .withAmount(amount)
      .withDate(date)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();

    should.exist(ticketResponseModel);
    ticketResponseModel.id.should.be.equal(id);
    ticketResponseModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketResponseModel.amount.should.be.equal(amount);
    ticketResponseModel.date.should.be.equal(date);
    ticketResponseModel.createdAt.should.be.equal(createdAt);
    ticketResponseModel.updatedAt.should.be.equal(updatedAt);
    done();
  });

});
