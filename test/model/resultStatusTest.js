var chai = require('chai');
var should = chai.should();
var ResultStatus = require('../../lib/model/resultStatus').ResultStatus;

describe('status enum test', function () {

  it('should get result status', function (done) {
    var status = ResultStatus.getResultStatus('FINISHED');

    should.exist(status);
    status.should.be.equal(ResultStatus.FINISHED);
    done();
  });

  it('should get UNKNOWN result status for unknown value', function (done) {
    var status = ResultStatus.getResultStatus('unknown-value');

    should.exist(status);
    status.should.be.equal(ResultStatus.UNKNOWN);
    done();
  });

});
