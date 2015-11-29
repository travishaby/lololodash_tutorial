var _ = require("lodash");

var worker = function(comments) {
  var result = []
  var grouping = _.groupBy(comments, function(comment){
      return comment.username;
    })

  _.forEach(grouping, function(comments, name) {
    result.push({
           'username': name,
      'comment_count': comments.length
    });
  })

  return result.sort().reverse();
};

module.exports = worker;
