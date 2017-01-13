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
  var info = [param.args[0]];
  function add(a, b) {
    return a + b;
  }
  var total = 0;
  if (param.args[1]) {
    total = diceResults.reduce(add, 0) + parseInt(param.args[1]);
  } else {
    total = diceResults.reduce(add, 0);
  }
  info.push(diceResults);
  info.push(total);
  util.postMessage(channel, info.join('\n\n'));
};
