const { TextEncoder, TextDecoder } = require('bare-encoding')

exports.format = require('bare-format')

exports.formatWithOptions = exports.format.formatWithOptions

exports.inspect = require('bare-inspect')

exports.debuglog = require('bare-debug-log')

exports.inherits = function inherits (ctor, superCtor) {
  if (superCtor) Object.setPrototypeOf(ctor.prototype, superCtor.prototype)
}

exports.deprecate = function deprecate (fn, msg, code) {
  let warned = false

  return function (...args) {
    if (!warned) {
      warned = true

      if (code) {
        console.warn(`[${code}]`, 'DeprecationWarning:', msg)
      } else {
        console.warn('DeprecationWarning:', msg)
      }
    }

    if (new.target) return Reflect.construct(fn, args, new.target)

    return Reflect.apply(fn, this, args)
  }
}

exports.TextEncoder = TextEncoder

exports.TextDecoder = TextDecoder

exports.types = require('./types')

const kCustomPromisifiedSymbol = Symbol('util.promisify.custom')

function promisify (original) {
  if (typeof original !== 'function') {
    throw new Error('The "original" argument must be of type Function')
  }

  if (original[kCustomPromisifiedSymbol]) {
    const fn = original[kCustomPromisifiedSymbol]
    if (typeof fn !== 'function') {
      throw new Error('The [util.promisify.custom] property must be a function')
    }

    return Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      __proto__: null,
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    })
  }

  function fn (...args) {
    return new Promise((resolve, reject) => {
      original.call(this, ...args, (err, value) => {
        if (err) {
          return reject(err)
        }
        resolve(value)
      })
    })
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original))
  Object.defineProperties(fn, Object.getOwnPropertyDescriptors(original))

  return Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    __proto__: null,
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  })
}

promisify.custom = kCustomPromisifiedSymbol

exports.promisify = promisify
