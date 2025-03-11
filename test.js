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
  function bare () {
    console.log('bare like Beer')
  }

  util.deprecate(
    bare(),
    'I am deprecated',
    'NOBEERFORYOU01'
  )
})
