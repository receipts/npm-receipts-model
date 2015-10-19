var chai = require('chai');
var should = chai.should();
var index = require('../index');

describe('index test', function () {

  it('should export agreementsRequest', function (done) {

    var agreementsRequest = index.model.agreementsRequest;
    should.exist(agreementsRequest);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});