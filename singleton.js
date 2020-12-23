/**
 * 单例模式：生成一个实例，下次直接返回该实例
 *
 * 利用闭包
 */

function A() {}
let a = new A()
let b = new A()
console.log(a === b) // false

const SingletonA = (function () {
  let instance = null
  return function () {
    if (!instance) instance = new A()
    return instance
  }
})()
let c = new SingletonA()
let d = new SingletonA()
console.log(c === d) // true
