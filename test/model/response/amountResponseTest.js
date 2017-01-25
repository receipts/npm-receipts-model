const chai = require('chai');
const should = chai.should();
const amountResponse = require('../../../lib/model/response/amountResponse');

describe('amountResponse model test', () => {

  const currency = 'currency';
  const value = 'value';

  it('should create model', done => {

    const amountResponseModel = new amountResponse.AmountResponse(
      currency,
      value
    );

    should.exist(amountResponseModel);
    amountResponseModel.currency.should.be.equal(currency);
    amountResponseModel.value.should.be.equal(value);
    done();
  });

  it('should create model by builder', function (done) {

    const amountResponseModel = new amountResponse.AmountResponseBuilder()
      .withCurrency(currency)
      .withValue(value)
      .build();

    should.exist(amountResponseModel);
    amountResponseModel.currency.should.be.equal(currency);
    amountResponseModel.value.should.be.equal(value);
    done();
  });

});
