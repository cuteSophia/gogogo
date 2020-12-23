/**
 * 实现 new 操作
 */

function Person(name, age) {
  this.name = name || 'noName'
  this.age = age || 3
}
var lily = new Person('lily', 18)
console.log(lily) // Person { name: 'lily', age: 18 }

function myNew(fn, ...rest) {
  const obj = Object.create(fn.prototype)
  fn.call(obj, ...rest)
  return obj
}
var jack = myNew(Person, 'jack', 22)
console.log(jack) // Person { name: 'jack', age: 22 }

function myNew2(fn, ...rest) {
  const obj = Object.create(fn.prototype)
  fn.apply(obj, rest)
  return obj
}

function myNew3(fn) {
  const args = Array.prototype.slice.call(arguments, 1)
  const obj = Object.create(fn.prototype)
  fn.call(obj, ...args)
  return obj
}

var rose = myNew5(Person)('rose', 60)
console.log(rose) // Person { name: 'rose', age: 60 }

function myNew4(fn) {
  return function () {
    const obj = Object.create(fn.prototype)
    fn.apply(obj, arguments)
    return obj
  }
}

function myNew5(fn) {
  return function () {
    const obj = {
      __proto__: fn.prototype,
    }
    fn.apply(obj, arguments)
    return obj
  }
}
