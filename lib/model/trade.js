var Trade = {
  HAIRDRESSING: 'HAIRDRESSING',
  PRIVATE_MEDIC_DENTAL: 'PRIVATE_MEDIC_DENTAL',
  VEHICLES: 'VEHICLES',
  FOOD_AND_DRINKS: 'FOOD_AND_DRINKS',
  OTHER: 'OTHER',

  map: {
    '5602c71013287705788b4567': 'HAIRDRESSING',
    '5602c71013287705788b4568': 'PRIVATE_MEDIC_DENTAL',
    '5602c71013287705788b4569': 'VEHICLES',
    '5602c71013287705788b456a': 'FOOD_AND_DRINKS',
    '': 'OTHER'
  },

  getTradeFromId: function getTradeFromId(id) {
    if (Trade.map.hasOwnProperty(id)) {
      return Trade.map[id];
    }

    return Trade.OTHER;
  },

  getIdFromTrade: function getIdFromTrade(trade) {
    for (var id in Trade.map) {
      if (Trade.map[id] === trade) {
        return id;
      }
    }

    return '';
  },

  getTrade: function (type) {

    if (Trade.hasOwnProperty(type)) {
      return Trade[type];
    }

    return Trade.OTHER;
  }
};


module.exports = {
  Trade: Trade
};
