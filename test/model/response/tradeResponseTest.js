const chai = require('chai');
const should = chai.should();
const tradeResponse = require('../../../lib/model/response/tradeResponse');

describe('tradeResponse model test', () => {

  const id = 'id';
  const name = 'name';

  it('should create model', done => {

    const tradeResponseModel = new tradeResponse.TradeResponse(
      id,
      name
    );

    should.exist(tradeResponseModel);
    tradeResponseModel.id.should.be.equal(id);
    tradeResponseModel.name.should.be.equal(name);
    done();
  });

  it('should create model by builder', function (done) {

    const tradeResponseModel = new tradeResponse.TradeResponseBuilder()
      .withId(id)
      .withName(name)
      .build();

    should.exist(tradeResponseModel);
    tradeResponseModel.id.should.be.equal(id);
    tradeResponseModel.name.should.be.equal(name);
    done();
  });

});
