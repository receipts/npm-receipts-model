const chai = require('chai');
const should = chai.should();
const ticketDetailsResponse = require('../../../lib/model/response/ticketDetailsResponse');

describe('ticketDetailsResponse model test', () => {

  const id = 'id';
  const code = 'code';
  const purchaseOrderNumber = 'purchaseOrderNumber';
  const amount = 'amount';
  const date = 'date';
  const special = 'special';
  const pointOfSale = 'pointOfSale';
  const taxRegistrationNumber = 'taxRegistrationNumber';
  const trade = 'trade';

  it('should create model', done => {

    const ticketDetailsResponseModel = new ticketDetailsResponse.TicketDetailsResponse(
      id,
      code,
      purchaseOrderNumber,
      amount,
      date,
      special,
      pointOfSale,
      taxRegistrationNumber,
      trade
    );

    should.exist(ticketDetailsResponseModel);
    ticketDetailsResponseModel.id.should.be.equal(id);
    ticketDetailsResponseModel.code.should.be.equal(code);
    ticketDetailsResponseModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketDetailsResponseModel.amount.should.be.equal(amount);
    ticketDetailsResponseModel.date.should.be.equal(date);
    ticketDetailsResponseModel.special.should.be.equal(special);
    ticketDetailsResponseModel.pointOfSale.should.be.equal(pointOfSale);
    ticketDetailsResponseModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    ticketDetailsResponseModel.trade.should.be.equal(trade);
    done();
  });

  it('should create model by builder', function (done) {

    const ticketDetailsResponseModel = new ticketDetailsResponse.TicketDetailsResponseBuilder()
      .withId(id)
      .withCode(code)
      .withPurchaseOrderNumber(purchaseOrderNumber)
      .withAmount(amount)
      .withDate(date)
      .withSpecial(special)
      .withPointOfSale(pointOfSale)
      .withTaxRegistrationNumber(taxRegistrationNumber)
      .withTrade(trade)
      .build();

    should.exist(ticketDetailsResponseModel);
    ticketDetailsResponseModel.id.should.be.equal(id);
    ticketDetailsResponseModel.code.should.be.equal(code);
    ticketDetailsResponseModel.purchaseOrderNumber.should.be.equal(purchaseOrderNumber);
    ticketDetailsResponseModel.amount.should.be.equal(amount);
    ticketDetailsResponseModel.date.should.be.equal(date);
    ticketDetailsResponseModel.special.should.be.equal(special);
    ticketDetailsResponseModel.pointOfSale.should.be.equal(pointOfSale);
    ticketDetailsResponseModel.taxRegistrationNumber.should.be.equal(taxRegistrationNumber);
    ticketDetailsResponseModel.trade.should.be.equal(trade);
    done();
  });

});
