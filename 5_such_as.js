var _ = require("lodash");

var worker = function(words) {

  var modifiedWords = _.chain(words)
    .map(function(word) {
      return word.toUpperCase() + 'CHAINED';
    })
    .sort()

  return modifiedWords;
};

module.exports = worker;
