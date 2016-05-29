var winston = require('winston')
var config = require('config')
var pjson = require('../package.json')

var cfgLog = config.get('Loggers')
var transports = []

// Defines how the format of a logging has to be
// Date|logging level|Module Name:Module Version|Message
var formatter = function (options) {
  return options.timestamp() + '|' + options.level.toUpperCase() + '|' + pjson.name + ':' + pjson.version + '|' +
    (undefined !== options.message ? options.message : '') +
    (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '')
}

var timestamp = function () {
  return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') // // remove the 'T' and remove the . and everything after
}

if (cfgLog.logToConsole) {
  transports.push(new (winston.transports.Console)({
    name: 'debug',
    colorize: true,
    json: false,
    level: (cfgLog.debug) ? 'debug' : 'info',
    timestamp: timestamp,
    formatter: formatter
  }))
}

if (cfgLog.logToFile || (cfgLog.logToConsole === false && cfgLog.logToFile === false)) {
  if (cfgLog.logToConsole === false && cfgLog.logToFile === false) {
    console.error('Detected that no logging option has been enabled!!! Enabling File logging and\n' +
      'setting logging level to INFO. Consider selecting a logging option.')
  }

  transports.push(new (winston.transports.File)({
    name: 'info',
    // TODO : 'consider creating a sysmlink to /var/log or create the logging directory directley'
    filename: cfgLog.logFileDir + '/' + pjson.name + '/' + pjson.name + '.log', // Logging filename is the Module name as specified in the package.json file.
    level: (cfgLog.debug) ? 'debug' : 'info',
    json: cfgLog.logFileJson,
    timestamp: timestamp,
    formatter: formatter,
    maxSize: cfgLog.maxSize, // Logging to file, when filew reaches the maxSize an new file will be creted.
    maxFiles: cfgLog.maxFiles,
    tailable: cfgLog.tailable,
    colorize: cfgLog.logFileColorize
  }))
}

var logger = new winston.Logger({
  transports: transports,
  exceptionHandlers: [
    new (winston.transports.Console)({
      name: 'debug-exception',
      colorize: true,
      json: false
    })
  ],
  exitOnError: false
})

module.exports = logger
