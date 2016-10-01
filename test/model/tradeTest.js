var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
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

  it('should get trade for FOOD_AND_DRINKS', function (done) {
    var trade = Trade.getTrade('FOOD_AND_DRINKS');

    should.exist(trade);
    trade.should.be.equal(Trade.FOOD_AND_DRINKS);
    done();
  });

  it('should get OTHER trade for unknown value', function (done) {
    var trade = Trade.getTrade('unknown-value');

    should.exist(trade);
    trade.should.be.equal(Trade.OTHER);
    done();
  });

  it('should get trade from HAIRDRESSING id', function (done) {
    var trade = Trade.getTradeFromId('5602c71013287705788b4567');

    expect(trade).to.be.equal(Trade.HAIRDRESSING);
    done();
  });

  it('should get trade from PRIVATE_MEDIC_DENTAL id', function (done) {
    var trade = Trade.getTradeFromId('5602c71013287705788b4568');

    expect(trade).to.be.equal(Trade.PRIVATE_MEDIC_DENTAL);
    done();
  });

  it('should get trade from VEHICLES id', function (done) {
    var trade = Trade.getTradeFromId('5602c71013287705788b4569');

    expect(trade).to.be.equal(Trade.VEHICLES);
    done();
  });

  it('should get trade from FOOD_AND_DRINKS id', function (done) {
    var trade = Trade.getTradeFromId('5602c71013287705788b456a');

    expect(trade).to.be.equal(Trade.FOOD_AND_DRINKS);
    done();
  });

  it('should get trade from TAXI id', function (done) {
    var trade = Trade.getTradeFromId('57eebed76adf7c2f1c14586a');

    expect(trade).to.be.equal(Trade.TAXI);
    done();
  });

  it('should get id from HAIRDRESSING trade', function (done) {
    var id = Trade.getIdFromTrade('HAIRDRESSING');

    expect(id).to.be.equal('5602c71013287705788b4567');
    done();
  });

  it('should get id from VEHICLES trade', function (done) {
    var id = Trade.getIdFromTrade('VEHICLES');

    expect(id).to.be.equal('5602c71013287705788b4569');
    done();
  });

  it('should get id from PRIVATE_MEDIC_DENTAL trade', function (done) {
    var id = Trade.getIdFromTrade('PRIVATE_MEDIC_DENTAL');

    expect(id).to.be.equal('5602c71013287705788b4568');
    done();
  });

  it('should get id from FOOD_AND_DRINKS trade', function (done) {
    var id = Trade.getIdFromTrade('FOOD_AND_DRINKS');

    expect(id).to.be.equal('5602c71013287705788b456a');
    done();
  });

  it('should get id from TAXI trade', function (done) {
    var id = Trade.getIdFromTrade('TAXI');

    expect(id).to.be.equal('57eebed76adf7c2f1c14586a');
    done();
  });

});
