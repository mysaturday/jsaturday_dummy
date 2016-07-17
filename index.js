var info = require('./info.js');
var factory = require('jsaturday_factory');

module.exports = function(settings){
  return factory(settings, info);
}