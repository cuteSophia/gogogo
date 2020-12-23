/**
 * 浅拷贝、深拷贝
 */

/**
 * 浅：Object.assign({}, obj)
 */
let a = { name: 'apple' }
let b = Object.assign({}, a)
b.name = 'orange'
// console.log(a.name) // apple
// console.log(b.name) // orange

/**
 * 浅：{...obj}
 */
let c = { name: 'cat' }
let d = { ...c }
d.name = 'dog'
// console.log(c.name) // cat
// console.log(d.name) // dog

/**
 * 浅：JSON.parse(JSON.stringify(obj))
 */
let e = { name: 'red' }
let f = JSON.parse(JSON.stringify(e))
f.name = 'blue'
// console.log(e.name) // red
// console.log(f.name) // blue

/**
 * 深
 */
function deepCopy(o) {
  let c = {}
  for (let v in o) {
    if (Object.prototype.toString.call(o[v]) === '[object Object]') {
      c[v] = deepCopy(o[v])
    } else {
      c[v] = o[v]
    }
  }
  return c
}
let g = { o: { name: { a: 'bird' } }, p: 1 }
let h = deepCopy(g)
h.o.name.a = 'duck'
// console.log(g)
// console.log(h)
