'use strict';
let api = require('./shared.js');
let cli = require('heroku-cli-util');
let co  = require('co');

module.exports = {
  topic: 'connect',
  command: 'restart',
  description: 'Restart a connection',
  help: 'Clears errors and attempts to resume sync operations',
  flags: [
    {name: 'resource', description: 'specific connection resource name', hasValue: true}
  ],
  needsApp: true,
  needsAuth: true,
  run: cli.command(co.wrap(function* (context, heroku) {
    yield cli.action('restarting connection', co(function* () {
      let connection = yield api.withConnection(context, heroku);
      let url = '/api/v3/connections/' + connection.id + '/actions/restart';
      yield api.request(context.auth.password, 'POST', url);
    }));
  }))
};
