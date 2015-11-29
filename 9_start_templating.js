var _ = require("lodash");

var worker = function(login_info) {

  var message = _.template('Hello <%= name %> (logins: <%= login.length %>)')(login_info)

  return message;
};

module.exports = worker;
