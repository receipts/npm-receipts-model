var Trade = {
  HAIRDRESSING: 'HAIRDRESSING',
  PRIVATE_MEDIC_DENTAL: 'PRIVATE_MEDIC_DENTAL',
  OTHER: 'OTHER',

  getTrade: function (type) {

    if (this.hasOwnProperty(type)) {
      return Trade[type];
    }

    return Trade.OTHER;
  }
};


module.exports = {
  Trade: Trade
};
