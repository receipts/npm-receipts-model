var chai = require('chai');
var should = chai.should();
var Currency = require('../../lib/model/currency').Currency;

describe('currency enum test', function () {

  it('should get currency', function (done) {
    var currency = Currency.getCurrency('PLN');

    should.exist(currency);
    currency.should.be.equal(Currency.PLN);
    done();
  });

  it('should get UNKNOWN currency for unknown value', function (done) {
    var currency = Currency.getCurrency('unknown-value');

    should.exist(currency);
    currency.should.be.equal(Currency.UNKNOWN);
    done();
  });

});
