const test = require('brittle')
const { inherits } = require('..')

test('inherits', (t) => {
  function Parent() {}

  function Child() {}

  inherits(Child, Parent)

  const child = new Child()

  t.ok(child instanceof Child, 'is child')
  t.ok(child instanceof Parent, 'is parent')
})
