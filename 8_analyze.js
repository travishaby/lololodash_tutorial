var _ = require("lodash");

var worker = function(people) {

  var people = _.sortBy(people, "income")

  function average(peeps){
    var total = _.reduce(peeps, function(sum, person){
      return sum + person.income;
    }, 0);
    return total / peeps.length;
  };

  var avg = average(people);

  function underperformers(peeps){
    return _.filter(peeps, function(person){
      return person.income <= avg
    });
  };

  function overperformers(peeps){
    return _.filter(peeps, function(person){
      return person.income > avg
    });
  };

  var analysis = {
    "average": avg,
    "underperform": underperformers(people),
    "overperform": overperformers(people),
  };

  return analysis;
};

module.exports = worker;
