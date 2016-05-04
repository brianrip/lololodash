var _ = require('lodash');

var worker = function(comments) {
  var countComments = [];

  var byName = _.groupBy(comments, "username");

  var countByGroup = _.forEach(byName, function(comments, user) {
    countComments.push( {username: user, comment_count: _.size(comments)})
  })

  return _.orderBy(countComments, 'comment_count', 'desc')
};

module.exports = worker
