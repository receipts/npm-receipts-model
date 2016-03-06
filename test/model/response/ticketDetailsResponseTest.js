var chai = require('chai');
var should = chai.should();
var ticketDetailsResponse = require('../../../lib/model/response/ticketDetailsResponse');

describe('ticketDetailsResponse model test', function () {

  var id = 'id';
  var code = 'code';
  var purchaseOrderNumber = 'purchaseOrderNumber';
  var amount = 'amount';
  var date = 'date';
  var special = 'special';
  var pointOfSale = 'pointOfSale';
  var taxRegistrationNumber = 'taxRegistrationNumber';
  var trade = 'trade';

  it('should create model', function (done) {

    var ticketDetailsResponseModel = new ticketDetailsResponse.TicketDetailsResponse(
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

    var ticketDetailsResponseModel = new ticketDetailsResponse.TicketDetailsResponseBuilder()
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
