var _ = require("lodash");

var worker = function(cities) {

  var tempGroups = {
                    hot: [],
                    warm: []
                   };

  function checkTemperature(temp) {
    return temp > 19;
  }

  _.forEach(cities, function(temps, name) {
    if (_.every(temps, checkTemperature)) {
      tempGroups.hot.push(name);
    }
    else if (_.some(temps, checkTemperature)) {
      tempGroups.warm.push(name);
    }
  });
  return tempGroups;
};

module.exports = worker;
