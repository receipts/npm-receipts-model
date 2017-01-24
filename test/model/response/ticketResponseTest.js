const chai = require('chai');
const should = chai.should();
const ticketResponse = require('../../../lib/model/response/ticketResponse');

describe('ticketResponse model test', () => {

  const id = 'id';
  const code = 'code';
  const purchaseOrderNumber = 'purchaseOrderNumber';
  const amount = 'amount';
  const date = 'date';
  const special = 'special';

  it('should create model', done => {

    const ticketResponseModel = new ticketResponse.TicketResponse(
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

    const ticketResponseModel = new ticketResponse.TicketResponseBuilder()
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
