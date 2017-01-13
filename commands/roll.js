var util = require('../util');

module.exports = function (param) {
  var	channel	= param.channel;
  var rollInfo = param.args[0].split('d');
  var diceCount = parseInt(rollInfo[0]);
  var diceSize = parseInt(rollInfo[1]);
  function roll(dieSize) {
    return (Math.floor(Math.random() * dieSize) + 1);
  }
  var diceResults = [];
  for (i = 0; i < diceCount; i++) {
    diceResults.push(roll(diceSize));
  }
  var info = [];
  function add(a, b) {
    return a + b;
  }
  info.push(diceResults);
  info.push(diceResults.reduce(add, 0))
  util.postMessage(channel, info.join('\n\n'));
};
