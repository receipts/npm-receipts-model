var extend = require('util')._extend;
var Trade = require('./model/trade').Trade;

var map = {
  '5602c71013287705788b4567': Trade.HAIRDRESSING,
  '5602c71013287705788b4568': Trade.PRIVATE_MEDIC_DENTAL,
  '': Trade.OTHER
};

var getTradeFromId = function getTradeFromId(id) {
  if (map.hasOwnProperty(id)) {
    return map[id];
  }

  return Trade.OTHER;
};

var getIdFromTrade = function getIdFromTrade(trade) {
  for (var id in map) {
    if (map[id] === trade) {
      return id;
    }
  }

  return '';
};


module.exports = {
  getTradeFromId: getTradeFromId,
  getIdFromTrade: getIdFromTrade
};