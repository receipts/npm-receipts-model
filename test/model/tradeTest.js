var chai = require('chai');
var should = chai.should();
var Trade = require('../../lib/model/trade').Trade;

describe('trade enum test', function () {

  it('should get trade for HAIRDRESSING', function (done) {
    var trade = Trade.getTrade('HAIRDRESSING');

    should.exist(trade);
    trade.should.be.equal(Trade.HAIRDRESSING);
    done();
  });

  it('should get trade for PRIVATE_MEDIC_DENTAL', function (done) {
    var trade = Trade.getTrade('PRIVATE_MEDIC_DENTAL');

    should.exist(trade);
    trade.should.be.equal(Trade.PRIVATE_MEDIC_DENTAL);
    done();
  });

  it('should get OTHER trade for unknown value', function (done) {
    var trade = Trade.getTrade('unknown-value');

    should.exist(trade);
    trade.should.be.equal(Trade.OTHER);
    done();
  });

});
