const test = require('brittle')
const { deprecate } = require('..')

test('deprecate', (t) => {
  function hello(name) {
    return `Hello ${name}`
  }

  hello = deprecate(hello, 'hello() is deprecated', 'DEPRECATED')

  t.is(hello('world'), 'Hello world')
})
