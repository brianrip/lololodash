var _ = require('lodash');

var worker = function(freelancers) {

  var incomeTotal = _.reduce(freelancers, function(sum, freelancer) {
    return sum + freelancer.income
  }, 0)

  var averageIncome = incomeTotal/(freelancers.length)

  var underperform = _.chain(freelancers)

  .filter(function(freelancer) {
    return freelancer.income <= averageIncome
  })
  .sortBy('income')

  var overperform = _.chain(freelancers)

  .filter(function(freelancer) {
    return freelancer.income > averageIncome
  })
  .sortBy('income')

return { average: averageIncome, underperform: underperform, overperform: overperform }
};

module.exports = worker;
