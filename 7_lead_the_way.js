var _ = require("lodash");

var worker = function(comments) {

  var grouped = _.groupBy(comments, 'article');

  var totaled = _.map(grouped, function(group, key){
    var quantity = _.reduce(group, function(total, order){
      return total + order.quantity;
    }, 0);
    return {
           'article': parseInt(key),
      'total_orders': quantity
    };
  }).reverse();

  return totaled;
};

module.exports = worker;
