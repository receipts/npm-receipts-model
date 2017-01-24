const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const Trade = require('../../lib/model/trade').Trade;

describe('trade enum test', () => {

  it('should get trade for HAIRDRESSING', done => {
    const trade = Trade.getTrade('HAIRDRESSING');

    should.exist(trade);
    trade.should.be.equal(Trade.HAIRDRESSING);
    done();
  });

  it('should get trade for PRIVATE_MEDIC_DENTAL', done => {
    const trade = Trade.getTrade('PRIVATE_MEDIC_DENTAL');

    should.exist(trade);
    trade.should.be.equal(Trade.PRIVATE_MEDIC_DENTAL);
    done();
  });

  it('should get trade for FOOD_AND_DRINKS', done => {
    const trade = Trade.getTrade('FOOD_AND_DRINKS');

    should.exist(trade);
    trade.should.be.equal(Trade.FOOD_AND_DRINKS);
    done();
  });

  it('should get OTHER trade for unknown value', done => {
    const trade = Trade.getTrade('unknown-value');

    should.exist(trade);
    trade.should.be.equal(Trade.OTHER);
    done();
  });

  it('should get trade from HAIRDRESSING id', done => {
    const trade = Trade.getTradeFromId('5602c71013287705788b4567');

    expect(trade).to.be.equal(Trade.HAIRDRESSING);
    done();
  });

  it('should get trade from PRIVATE_MEDIC_DENTAL id', done => {
    const trade = Trade.getTradeFromId('5602c71013287705788b4568');

    expect(trade).to.be.equal(Trade.PRIVATE_MEDIC_DENTAL);
    done();
  });

  it('should get trade from VEHICLES id', done => {
    const trade = Trade.getTradeFromId('5602c71013287705788b4569');

    expect(trade).to.be.equal(Trade.VEHICLES);
    done();
  });

  it('should get trade from FOOD_AND_DRINKS id', done => {
    const trade = Trade.getTradeFromId('5602c71013287705788b456a');

    expect(trade).to.be.equal(Trade.FOOD_AND_DRINKS);
    done();
  });

  it('should get trade from TAXI id', done => {
    const trade = Trade.getTradeFromId('57eebed76adf7c2f1c14586a');

    expect(trade).to.be.equal(Trade.TAXI);
    done();
  });

  it('should get trade from FUEL id', done => {
    const trade = Trade.getTradeFromId('57f4e011065862e393475820');

    expect(trade).to.be.equal(Trade.FUEL);
    done();
  });

  it('should get id from HAIRDRESSING trade', done => {
    const id = Trade.getIdFromTrade('HAIRDRESSING');

    expect(id).to.be.equal('5602c71013287705788b4567');
    done();
  });

  it('should get id from VEHICLES trade', done => {
    const id = Trade.getIdFromTrade('VEHICLES');

    expect(id).to.be.equal('5602c71013287705788b4569');
    done();
  });

  it('should get id from PRIVATE_MEDIC_DENTAL trade', done => {
    const id = Trade.getIdFromTrade('PRIVATE_MEDIC_DENTAL');

    expect(id).to.be.equal('5602c71013287705788b4568');
    done();
  });

  it('should get id from FOOD_AND_DRINKS trade', done => {
    const id = Trade.getIdFromTrade('FOOD_AND_DRINKS');

    expect(id).to.be.equal('5602c71013287705788b456a');
    done();
  });

  it('should get id from TAXI trade', done => {
    const id = Trade.getIdFromTrade('TAXI');

    expect(id).to.be.equal('57eebed76adf7c2f1c14586a');
    done();
  });

  it('should get id from FUEL trade', done => {
    const id = Trade.getIdFromTrade('FUEL');

    expect(id).to.be.equal('57f4e011065862e393475820');
    done();
  });

});
