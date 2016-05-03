var _ = require('lodash');

var worker = function(cities) {
  var towns = { hot: [], warm: []};

  function thermometer (temp) {
    return temp > 19;
  }

   _.forEach(cities, function (town, name) {
    if (_.every(town, thermometer)) {
      towns.hot.push(name);
    }
    else if (_.some(town, thermometer)) {
      towns.warm.push(name);
    }
  })
  return towns;

};

module.exports = worker;
