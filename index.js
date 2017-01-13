var slackTerminal = require('slack-terminalize');
var botToken = require('./.env').botToken;

slackTerminal.init(botToken, {

}, {
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});
