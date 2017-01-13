var util = require('../util');

module.exports = function (param) {
  var	channel	= param.channel;
  if (param.args[0].includes('d')) {
    var rollInfo = param.args[0].split('d');
    if (parseInt(rollInfo[0]) && parseInt(rollInfo[1])) {
      var diceCount = parseInt(rollInfo[0]);
      var diceSize = parseInt(rollInfo[1]);
      function roll(dieSize) {
        return (Math.floor(Math.random() * dieSize) + 1);
      }
      var diceResults = [];
      for (i = 0; i < diceCount; i++) {
        diceResults.push(roll(diceSize));
      }
      var message = [param.args[0]];
      function add(a, b) {
        return a + b;
      }
      var total = 0;
      if (param.args[1]) {
        total = diceResults.reduce(add, 0) + parseInt(param.args[1]);
      } else {
        total = diceResults.reduce(add, 0);
      }
      message.push(diceResults);
      message.push(total);
      util.postMessage(channel, message.join('\n'));
    } else {
      util.postMessage (channel, 'Please enter a valid die roll.');
    }
  } else {
    util.postMessage (channel, 'Please enter a valid die roll.');
  }

};
