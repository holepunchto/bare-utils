const test = require('brittle')
const { promisify } = require('..')

test('promisify', async (t) => {
  function add(a, b, cb) {
    setTimeout(() => cb(null, a + b), 10)
  }

  const addAsync = promisify(add)

  t.is(await addAsync(2, 3), 5)
})

test('promisify, error', async (t) => {
  function fail(cb) {
    setTimeout(() => cb(new Error('Abort')), 10)
  }

  const failAsync = promisify(fail)

  await t.exception(failAsync(), /Abort/)
})
