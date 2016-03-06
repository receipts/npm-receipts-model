var chai = require('chai');
var should = chai.should();
var ticketResponse = require('../../../lib/model/response/ticketResponse');

describe('ticketResponse model test', function () {

  var id = 'id';
  var code = 'code';
  var purchaseOrderNumber = 'purchaseOrderNumber';
  var amount = 'amount';
  var date = 'date';
  var special = 'special';

  it('should create model', function (done) {

    var ticketResponseModel = new ticketResponse.TicketResponse(
      id, 
      code, 
      purchaseOrderNumber, 
      amount, 
      date,
      special
    );

    should.exist(ticketResponseModel);
    ticketResponseModel.id.should.be.equal(id);
    ticketResponseModel.code.should.be.equal(code);
    ticketResponseModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketResponseModel.amount.should.be.equal(amount);
    ticketResponseModel.date.should.be.equal(date);
    ticketResponseModel.special.should.be.equal(special);
    done();
  });

  it('should create model by builder', function (done) {

    var ticketResponseModel = new ticketResponse.TicketResponseBuilder()
      .withId(id)
      .withCode(code)
      .withPurchaseOrderNumber(purchaseOrderNumber)
      .withAmount(amount)
      .withDate(date)
      .withSpecial(special)
      .build();

    should.exist(ticketResponseModel);
    ticketResponseModel.id.should.be.equal(id);
    ticketResponseModel.code.should.be.equal(code);
    ticketResponseModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketResponseModel.amount.should.be.equal(amount);
    ticketResponseModel.date.should.be.equal(date);
    ticketResponseModel.special.should.be.equal(special);
    done();
  });

});
