var util = require('../util');

module.exports = function (param) {
  var	channel		= param.channel
    util.postMessage(channel, 'You rolled dice');
};
