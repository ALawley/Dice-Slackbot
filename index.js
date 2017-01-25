var slackTerminal = require('slack-terminalize');

slackTerminal.init(process.env.DICE_BOT_TOKEN, {

}, {
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});
