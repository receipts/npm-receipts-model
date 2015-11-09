var chai = require('chai');
var should = chai.should();
var tradeResponse = require('../../../lib/model/response/tradeResponse');

describe('tradeResponse model test', function () {

  var id = 'id';
  var name = 'name';

  it('should create model', function (done) {

    var tradeResponseModel = new tradeResponse.TradeResponse(
      id, 
      name
    );

    should.exist(tradeResponseModel);
    tradeResponseModel.id.should.be.equal(id);
    tradeResponseModel.name.should.be.equal(name);
    done();
  });

  it('should create model by builder', function (done) {

    var tradeResponseModel = new tradeResponse.TradeResponseBuilder()
      .withId(id)
      .withName(name)
      .build();

    should.exist(tradeResponseModel);
    tradeResponseModel.id.should.be.equal(id);
    tradeResponseModel.name.should.be.equal(name);
    done();
  });

});
