const chai = require('chai');
const should = chai.should();
const resultPrizeResponse = require('../../../lib/model/response/resultPrizeResponse');

describe('resultPrizeResponse model test', () => {

  const name = 'name';
  const winners = 'winners';

  it('should create model', done => {

    const resultPrizeResponseModel = new resultPrizeResponse.ResultPrizeResponse(
      name,
      winners
    );

    should.exist(resultPrizeResponseModel);
    resultPrizeResponseModel.name.should.be.equal(name);
    resultPrizeResponseModel.winners.should.be.equal(winners);
    done();
  });

  it('should create model by builder', function (done) {

    const resultPrizeResponseModel = new resultPrizeResponse.ResultPrizeResponseBuilder()
      .withName(name)
      .withWinners(winners)
      .build();

    should.exist(resultPrizeResponseModel);
    resultPrizeResponseModel.name.should.be.equal(name);
    resultPrizeResponseModel.winners.should.be.equal(winners);
    done();
  });

});
