const chai = require('chai');
const should = chai.should();
const Currency = require('../../lib/model/currency').Currency;

describe('currency enum test', () => {

  it('should get currency', done => {
    const currency = Currency.getCurrency('PLN');

    should.exist(currency);
    currency.should.be.equal(Currency.PLN);
    done();
  });

  it('should get UNKNOWN currency for unknown value', done => {
    const currency = Currency.getCurrency('unknown-value');

    should.exist(currency);
    currency.should.be.equal(Currency.UNKNOWN);
    done();
  });

});
