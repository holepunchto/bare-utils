const type = require('bare-type')

module.exports = {
  isAnyArrayBuffer: (value) => {
    const t = type(value)
    return t.isArrayBuffer() || t.isSharedArrayBuffer()
  },
  isArrayBufferView: (value) => ArrayBuffer.isView(value),
  isArgumentsObject: (value) => type(value).isArguments(),
  isArrayBuffer: (value) => type(value).isArrayBuffer(),
  isAsyncFunction: (value) => type(value).isAsyncFunction(),
  isBigInt64Array: (value) => type(value).isBigInt64Array(),
  isBigIntObject: (value) => type(value).isBigInt(),
  isBigUint64Array: (value) => type(value).isBigUint64Array(),
  isBooleanObject: (value) => type(value).isBoolean(),
  isBoxedPrimitive: () => {
    throw new Error('Not implemented')
  },
  isCryptoKey: () => {
    throw new Error('Not implemented')
  },
  isDataView: (value) => type(value).isDataView(),
  isDate: (value) => type(value).isDate(),
  isExternal: (value) => type(value).isExternal(),
  isFloat16Array: () => {
    throw new Error('Not implemented')
  },
  isFloat32Array: (value) => type(value).isFloat32Array(),
  isFloat64Array: (value) => type(value).isFloat64Array(),
  isGeneratorFunction: (value) => type(value).isGeneratorFunction(),
  isGeneratorObject: (value) => type(value).isGenerator(),
  isInt8Array: (value) => type(value).isInt8Array(),
  isInt16Array: (value) => type(value).isInt16Array(),
  isInt32Array: (value) => type(value).isInt32Array(),
  isKeyObject: () => {
    throw new Error('Not implemented')
  },
  isMap: (value) => type(value).isMap(),
  isMapIterator: () => {
    throw new Error('Not implemented')
  },
  isModuleNamespaceObject: (value) => type(value).isModuleNamespace(),
  isNativeError: () => {
    throw new Error('Not implemented')
  },
  isNumberObject: (value) => type(value).isNumber(),
  isPromise: (value) => type(value).isPromise(),
  isProxy: (value) => type(value).isProxy(),
  isRegExp: (value) => type(value).isRegExp(),
  isSet: (value) => type(value).isSet(),
  isSetIterator: () => {
    throw new Error('Not implemented')
  },
  isSharedArrayBuffer: (value) => type(value).isSharedArrayBuffer(),
  isStringObject: (value) => type(value).isString(),
  isSymbolObject: (value) => type(value).isSymbol(),
  isTypedArray: (value) => type(value).isTypedArray(),
  isUint8Array: (value) => type(value).isUint8Array(),
  isUint8ClampedArray: (value) => type(value).isUint8ClampedArray(),
  isUint16Array: (value) => type(value).isUint16Array(),
  isUint32Array: (value) => type(value).isUint32Array()
}
