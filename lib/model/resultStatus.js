const ResultStatus = {
  ACTIVE: 'ACTIVE',
  FINISHED: 'FINISHED',
  PENDING: 'PENDING',
  UNKNOWN: 'UNKNOWN',

  getResultStatus: function (type) {

    if (this.hasOwnProperty(type)) {
      return ResultStatus[type];
    }

    return ResultStatus.UNKNOWN;
  }
};


module.exports = {
  ResultStatus: ResultStatus
};
