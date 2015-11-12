var chai = require('chai');
var should = chai.should();
var resultPrizeResponse = require('../../../lib/model/response/resultPrizeResponse');

describe('resultPrizeResponse model test', function () {

  var name = 'name';
  var winners = 'winners';

  it('should create model', function (done) {

    var resultPrizeResponseModel = new resultPrizeResponse.ResultPrizeResponse(
      name, 
      winners
    );

    should.exist(resultPrizeResponseModel);
    resultPrizeResponseModel.name.should.be.equal(name);
    resultPrizeResponseModel.winners.should.be.equal(winners);
    done();
  });

  it('should create model by builder', function (done) {

    var resultPrizeResponseModel = new resultPrizeResponse.ResultPrizeResponseBuilder()
      .withName(name)
      .withWinners(winners)
      .build();

    should.exist(resultPrizeResponseModel);
    resultPrizeResponseModel.name.should.be.equal(name);
    resultPrizeResponseModel.winners.should.be.equal(winners);
    done();
  });

});
