exports.format = require('bare-format')

exports.formatWithOptions = exports.format.formatWithOptions

exports.inspect = require('bare-inspect')

exports.inherits = function inherits (ctor, superCtor) {
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype)
}
