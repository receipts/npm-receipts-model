const Currency = {
  PLN: 'PLN',
  UNKNOWN: 'UNKNOWN',

  getCurrency: function (type) {

    if (this.hasOwnProperty(type)) {
      return Currency[type];
    }

    return Currency.UNKNOWN;
  }
};


module.exports = {
  Currency: Currency
};
