const chai = require('chai');
const should = chai.should();
const resultPrizeWinnerResponse = require('../../../lib/model/response/resultPrizeWinnerResponse');

describe('resultPrizeWinnerResponse model test', () => {

  const code = 'code';
  const name = 'name';
  const type = 'type';

  it('should create model', done => {

    const resultPrizeWinnerResponseModel = new resultPrizeWinnerResponse.ResultPrizeWinnerResponse(
      code,
      name,
      type
    );

    should.exist(resultPrizeWinnerResponseModel);
    resultPrizeWinnerResponseModel.code.should.be.equal(code);
    resultPrizeWinnerResponseModel.name.should.be.equal(name);
    resultPrizeWinnerResponseModel.type.should.be.equal(type);
    done();
  });

  it('should create model by builder', function (done) {

    const resultPrizeWinnerResponseModel = new resultPrizeWinnerResponse.ResultPrizeWinnerResponseBuilder()
      .withCode(code)
      .withName(name)
      .withType(type)
      .build();

    should.exist(resultPrizeWinnerResponseModel);
    resultPrizeWinnerResponseModel.code.should.be.equal(code);
    resultPrizeWinnerResponseModel.name.should.be.equal(name);
    resultPrizeWinnerResponseModel.type.should.be.equal(type);
    done();
  });

});
