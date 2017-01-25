const chai = require('chai');
const should = chai.should();
const resultResponse = require('../../../lib/model/response/resultResponse');

describe('resultResponse model test', () => {

  const name = 'name';
  const date = 'date';
  const status = 'status';
  const prizes = 'prizes';

  it('should create model', done => {

    const resultResponseModel = new resultResponse.ResultResponse(
      name,
      date,
      status,
      prizes
    );

    should.exist(resultResponseModel);
    resultResponseModel.name.should.be.equal(name);
    resultResponseModel.date.should.be.equal(date);
    resultResponseModel.status.should.be.equal(status);
    resultResponseModel.prizes.should.be.equal(prizes);
    done();
  });

  it('should create model by builder', function (done) {

    const resultResponseModel = new resultResponse.ResultResponseBuilder()
      .withName(name)
      .withDate(date)
      .withStatus(status)
      .withPrizes(prizes)
      .build();

    should.exist(resultResponseModel);
    resultResponseModel.name.should.be.equal(name);
    resultResponseModel.date.should.be.equal(date);
    resultResponseModel.status.should.be.equal(status);
    resultResponseModel.prizes.should.be.equal(prizes);
    done();
  });

});
