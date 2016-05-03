var _ = require('lodash');

var worker = function(articles) {
  return _.orderBy (articles, "quantity", "desc")
};

module.exports = worker;
