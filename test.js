const test = require('brittle')
const util = require('.')

test('inherits', (t) => {
  function Parent () {}

  function Child () {}

  util.inherits(Child, Parent)

  const child = new Child()

  t.ok(child instanceof Child, 'is child')
  t.ok(child instanceof Parent, 'is parent')
})

test('deprecate', (t) => {
  function bare () {
    console.log('bare like Beer')
  }

  bare = util.deprecate(bare, 'I am deprecated', 'NOBEERFORYOU01')

  bare()
})

test('TextEncoder', (t) => t.ok(util.TextEncoder))

test('TextDecoder', (t) => t.ok(util.TextDecoder))

test('types', (t) => {
  t.test('isArgumentsObject', (t) => {
    t.is(util.types.isArgumentsObject(arguments), true)
  })

  t.test('isBigIntObject', (t) => {
    t.is(util.types.isBigIntObject(BigInt(123)), false)
    t.is(util.types.isBigIntObject(123), false)
    t.is(util.types.isBigIntObject(Object(BigInt(123))), true)
  })

  t.test('isBooleanObject', (t) => {
    t.is(util.types.isBooleanObject(false), false)
    t.is(util.types.isBooleanObject(Boolean(false)), false)
    t.is(util.types.isBooleanObject(new Boolean(false)), true)
  })

  t.test('isGeneratorObject', (t) => {
    function * foo () {}
    t.is(util.types.isGeneratorObject(foo()), true)
  })

  t.test('isNumberObject', (t) => {
    t.is(util.types.isNumberObject(0), false)
    t.is(util.types.isNumberObject(new Number(0)), true)
  })

  t.test('isStringObject', (t) => {
    t.is(util.types.isStringObject(''), false)
    t.is(util.types.isStringObject(new String('')), true)
  })

  t.test('isSymbolObject', (t) => {
    const symbol = Symbol('foo')
    t.is(util.types.isSymbolObject(symbol), false)
    t.is(util.types.isSymbolObject(Object(symbol)), true)
  })
})

test('promisify', async (t) => {
  function add (a, b, cb) {
    setTimeout(() => cb(null, a + b), 10)
  }

  const addAsync = util.promisify(add)

  const result = await addAsync(2, 3)
  t.is(result, 5, 'promisified function resolves with result')

  function fail (cb) {
    setTimeout(() => cb(new Error('kaboom')), 10)
  }

  const failAsync = util.promisify(fail)

  await t.exception(async () => {
    await failAsync()
  }, /kaboom/, 'promisifed function rejects on error')

  function custom (cb) {
    cb(null, 'ignored')
  }
  custom[util.promisify.custom] = () => Promise.resolve('custom!')

  const customAsync = util.promisify(custom)
  const customResult = await customAsync()
  t.is(customResult, 'custom!', 'uses custom promisify implementation')
})
