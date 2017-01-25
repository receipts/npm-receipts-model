const chai = require('chai');
const should = chai.should();
const ResultStatus = require('../../lib/model/resultStatus').ResultStatus;

describe('status enum test', () => {

  it('should get result status', done => {
    const status = ResultStatus.getResultStatus('FINISHED');

    should.exist(status);
    status.should.be.equal(ResultStatus.FINISHED);
    done();
  });

  it('should get UNKNOWN result status for unknown value', done => {
    const status = ResultStatus.getResultStatus('unknown-value');

    should.exist(status);
    status.should.be.equal(ResultStatus.UNKNOWN);
    done();
  });

});
