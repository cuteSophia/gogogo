/**
 * call、apply
 * Function.prototype.call、Function.prototype.apply
 * 它们都是函数调用的方法，作用是：用来改变函数体里面 this 的指向。
 */

/**
 * 1. 第一个参数就代表函数里 this 的指向
 * 2. 第二个参数开始，apply 传入数组，call 传入的是参数列表
 * 3. call 比 apply 性能好，多用 call，因为 call 比 apply 少了一步将第二个参数解构的过程
 * 4. ES6 中引入了扩展运算符，即使参数是数组，也可以展开
 */

const param = [1, 2]
const o = { name: 'jack' }
function fn(a, b) {
  console.log(this.name, a, b)
}
// fn.call(o, ...param)
// fn.apply(o, param)

/**
 * bind 返回一个新函数，当新函数被调用时，函数中的 this 就会指向传入的第一个参数
 * 第二个参数和 call 一样，是参数列表的形式
 */
let fn2 = fn.bind(o, ...param)
// fn2()

/**
 * 手动实现 call
 */

function myFn(a, b) {
  return this.name + a + b
}
// ES6
Function.prototype.es6Call = function (obj, ...rest) {
  obj = obj || window
  obj._fn = this
  const fn = obj._fn(...rest)
  delete obj._fn
  return fn
}
// ES5
Function.prototype.es5Call = function (obj) {
  obj = obj || window

  let id = Math.random()
  while (obj.hasOwnProperty(id)) {
    id = Math.random()
  }
  obj[id] = this

  let args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  const fn = eval('obj[' + id + '](' + args + ')')
  delete obj[id]
  return fn
}
// console.log(myFn.es5Call({ name: 'rose' }, 1, 'A'))

/**
 * 手动实现 apply
 */
Function.prototype.es6Apply = function (obj, args) {
  obj = obj || window
  obj._fn = this
  const fn = obj._fn(...args)
  delete obj._fn
  return fn
}
Function.prototype.es5Apply = function (obj, arr) {
  obj = obj || window
  obj._fn = this
  let args = []
  for (let i = 0; i < arr.length; i++) {
    args.push('arr[' + i + ']')
  }
  const fn = eval('obj._fn(' + args + ')')
  delete obj._fn
  return fn
}
// console.log(myFn.es5Apply({ name: 'apple' }, ['+a', '+b']))

/**
 * 手写 bind
 */
Function.prototype.es6Bind = function (obj, ...args1) {
  return (...args2) => {
    const args = args1.concat(args2)
    obj._fn = this // this -> myFn
    const fn = obj._fn(...args)
    delete obj._fn
    return fn
  }
}
Function.prototype.applyBind = function (obj, ...args1) {
  return (...args2) => {
    const args = args1.concat(args2)
    return this.apply(obj, args)
  }
}
Function.prototype.applyBind2 = function (obj) {
  const self = this
  const args1 = Array.prototype.slice.call(arguments, 1)
  return function () {
    const args2 = Array.prototype.slice.call(arguments, 0)
    return self.apply(obj, args1.concat(args2))
  }
}
// console.log(myFn.applyBind2(o, 'A')('B'))

/**
 * arguments 是一个参数对象，可以通过下标获取参数，从0开始
 * 可以用 for...of 循环
 */
function test() {
  console.log(typeof arguments) // object
  for (let i of arguments) {
    console.log(i)
  }
  // 将 arguments 转化为数组
  const argArr = Array.prototype.slice.call(arguments)
  console.log(argArr)
}
// test('a', 'b', 'c')

/**
 * 求最大值，最小值
 * 数组本身没有 max 方法，可以借助 Math
 * Math.max(1, 2, 3)
 */

let numbers = [5, 458, 120, -23]
let max1 = Math.max.apply(null, numbers)
let max2 = Math.max(...numbers)
let min2 = Math.min.call(Math, ...numbers)
// console.log(max1)
