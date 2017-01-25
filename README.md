# Dice Roll Slackbot

#### 1/25/2017

#### By Anna Lawley

## Description

This app allows the user to deploy a slack bot to Heroku that will listen in on channels and post the results of dice rolls when the `roll` command is used.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Heroku Toolbelt](http://heroku.com/)

In addition you will need a heroku account to deploy the bot and a slack with admin privileges.

## Deployment

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `heroku create`
* Add a new [slack bot](https://my.slack.com/services/new/bot), note the access token, and invite it to all channels you wish the bot to be active in.
* `git push heroku master`
* `heroku config:set DICE_BOT_TOKEN=<your bot's access token>`
* `heroku ps:scale worker=1`

## Running the bot

* In any channel where the bot is active, simply send `roll XdY` where X is the number of dice to be rolled and Y is the number of sides the dice should have (so `roll 3d4` would roll 3 4-sided dice).
* Modifiers can be added by giving an integer after the dice roll. `roll 1d8 +7` would roll an 8-sided die and add 7 to the result. `roll 2d6 -3` would roll 2 6-sided dice and subtract 3.

## Future To-Dos

* add a bash script to set `DICE_BOT_TOKEN` locally then run, for local testing.
* add help commands to the bot
* rebuild as a slash command

## Technologies Used

Javascript, Heroku, Slack's bot API

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Anna Lawley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
