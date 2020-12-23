/**
 * var、let、const
 *
 * 1. let/const 声明的变量只在 `块级作用域` 内有效，且不存在 `变量提升` 的现象
 * 2. var 会存在变量提升，所以 var 可以先使用再声明，但是 let/const 必须先声明再使用
 * 3. let/const 不允许在相同作用域内，重复声明同一个变量；var 可以重复声明变量
 * 4. const 声明的变量不允许修改，通常用于声明常量
 * 5. 如果 const 声明了一个引用类型的变量，比如对象，它存储的是一个引用地址，不允许改变的是这个地址，而对象本身是可以修改的
 */

var b = 10
;(function b() {
  b = 20
  // console.log(b) // function b() {...}
  // 函数声明优先级高
})()

var b = 10
;(function b() {
  var b = 20
  // console.log(b) // 20
  // 变量先声明了
})()

// 改造打印10
var b = 10
;(function b(b) {
  // b = 20
  // console.log(b) // 10
})(b)

var a = 10
;(function () {
  // console.log(a) // undefined
  a = 5
  // console.log(window.a) // 10
  var a = 20 // 通过 var 将 a 的作用域声明在函数内
  // console.log(a) // 20
})()

var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
}
obj.push(1)
obj.push(2)
// console.log(obj) // Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]

var a = { n: 1 }
var b = a
a.x = a = { n: 2 }
console.log(a.x) // undefined
console.log(b.x) // { n: 2 }
console.log(a) // { n: 2 }
console.log(b) // { n: 1, x: { n: 2 } }
