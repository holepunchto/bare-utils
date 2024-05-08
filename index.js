exports.format = require('bare-format')

exports.formatWithOptions = exports.format.formatWithOptions

exports.inspect = require('bare-inspect')

exports.debuglog = require('bare-debug-log')

exports.inherits = function inherits (ctor, superCtor) {
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype)
}
