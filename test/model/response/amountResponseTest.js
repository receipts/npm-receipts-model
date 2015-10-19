var chai = require('chai');
var should = chai.should();
var amountResponse = require('../../../lib/model/response/amountResponse');

describe('amountResponse model test', function () {

  var currency = 'currency';
  var value = 'value';

  it('should create model', function (done) {

    var amountResponseModel = new amountResponse.AmountResponse(
      currency, 
      value
    );

    should.exist(amountResponseModel);
    amountResponseModel.currency.should.be.equal(currency);
    amountResponseModel.value.should.be.equal(value);
    done();
  });

  it('should create model by builder', function (done) {

    var amountResponseModel = new amountResponse.AmountResponseBuilder()
      .withCurrency(currency)
      .withValue(value)
      .build();

    should.exist(amountResponseModel);
    amountResponseModel.currency.should.be.equal(currency);
    amountResponseModel.value.should.be.equal(value);
    done();
  });

});
