const test = require('brittle')
const util = require('.')

test('inherits', (t) => {
  function Parent() {}

  function Child() {}

  util.inherits(Child, Parent)

  const child = new Child()

  t.ok(child instanceof Child, 'is child')
  t.ok(child instanceof Parent, 'is parent')
})

test('deprecate', (t) => {
  function bare() {
    console.log('bare like Beer')
  }

  bare = util.deprecate(bare, 'I am deprecated', 'NOBEERFORYOU01')

  bare()
})

test('TextEncoder', (t) => {
  const encoder = new util.TextEncoder()

  t.test('encode', (t) => {
    t.alike(encoder.encode('123'), new Uint8Array([49, 50, 51]))
  })

  t.test('encodeInto', (t) => {
    const dest = new Uint8Array(3)

    const { read, written } = encoder.encodeInto('123', dest)

    t.is(read, 3)
    t.is(written, 3)
    t.alike(dest, new Uint8Array([49, 50, 51]))
  })

  t.test('encoding', (t) => {
    t.is(encoder.encoding, 'utf-8')
  })
})

test('TextDecoder', (t) => {
  const decoder = new util.TextDecoder()

  t.test('decode', (t) => {
    t.is(decoder.decode(new Uint8Array([49, 50, 51])), '123')
  })

  t.test('encoding', (t) => {
    t.is(decoder.encoding, 'utf-8')
  })
})
