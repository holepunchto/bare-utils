const test = require('brittle')
const { types } = require('..')

test('types.isArgumentsObject', (t) => {
  t.is(types.isArgumentsObject(arguments), true)
})

test('types.isBigIntObject', (t) => {
  t.is(types.isBigIntObject(BigInt(123)), false)
  t.is(types.isBigIntObject(123), false)
  t.is(types.isBigIntObject(Object(BigInt(123))), true)
})

test('types.isBooleanObject', (t) => {
  t.is(types.isBooleanObject(false), false)
  t.is(types.isBooleanObject(Boolean(false)), false)
  t.is(types.isBooleanObject(new Boolean(false)), true)
})

test('types.isGeneratorObject', (t) => {
  function* foo() {}
  t.is(types.isGeneratorObject(foo()), true)
})

test('types.isNumberObject', (t) => {
  t.is(types.isNumberObject(0), false)
  t.is(types.isNumberObject(new Number(0)), true)
})

test('types.isStringObject', (t) => {
  t.is(types.isStringObject(''), false)
  t.is(types.isStringObject(new String('')), true)
})

test('types.isSymbolObject', (t) => {
  const symbol = Symbol('foo')
  t.is(types.isSymbolObject(symbol), false)
  t.is(types.isSymbolObject(Object(symbol)), true)
})
