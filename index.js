'use strict'
exports.topics = [{
  name: 'connect',
  description: 'manage connections for Heroku Connect'
}]

exports.commands = [
  require('./lib/commands/connect/info'),
  require('./lib/commands/connect/state'),
  require('./lib/commands/connect/import'),
  require('./lib/commands/connect/export'),
  require('./lib/commands/connect/pause'),
  require('./lib/commands/connect/resume'),
  require('./lib/commands/connect/restart'),
  require('./lib/commands/connect/sf-auth'),
  require('./lib/commands/connect/db-set'),
  require('./lib/commands/connect/mapping-state'),
  require('./lib/commands/connect/mapping-delete'),
  require('./lib/commands/connect/mapping-reload')
]
