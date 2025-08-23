const { TextEncoder, TextDecoder } = require('bare-encoding')

exports.TextEncoder = TextEncoder
exports.TextDecoder = TextDecoder

exports.format = require('bare-format')
exports.formatWithOptions = exports.format.formatWithOptions
exports.inspect = require('bare-inspect')
exports.debuglog = require('bare-debug-log')

exports.inherits = require('./lib/inherits')
exports.deprecate = require('./lib/deprecate')
exports.promisify = require('./lib/promisify')

exports.types = require('./types')
