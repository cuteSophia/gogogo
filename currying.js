/**
 * `柯里化` 是一种技术
 *
 * 就是把接收 `多个参数` 的函数变成接收 `一个参数` 的函数，
 * 这个函数会返回一个新的函数，并且接收剩余的参数，
 * 再把接收 `多个参数` 的函数变成接收 `一个参数` 的函数，
 * 最后把结果返回出来。
 *
 * 好处：参数复用、提前确认、延迟运行
 */

// 求和函数
function sum(x, y) {
  return x + y
}
// currying
function curryingSum(x) {
  return function (y) {
    return x + y
  }
}
sum(1, 2) // 3
curryingSum(1)(2) // 3

/**
 * 正则校验 reg.test(str)
 */

function check(reg, str) {
  return reg.test(str) // 返回正则校验结果
}
check(/\d+/g, 'apple1') // 是否有数字
check(/[a-z]+/g, 'apple1') // 是否有字符
function curryingCheck(reg) {
  return function (str) {
    return reg.test(str)
  }
}
const hasNumber = curryingCheck(/\d+/g)
const hasLetter = curryingCheck(/[a-z]+/g)
hasNumber('apple1')
hasLetter('apple1')

/**
 * cost()
 */
var cost = (function () {
  var args = []
  return function () {
    if (arguments.length === 0) {
      var money = 0
      for (var i = 0, l = args.length; i < l; i++) {
        money += args[i]
      }
      return money
    } else {
      Array.prototype.push.apply(args, arguments)
      // args = args.concat(Array.prototype.slice.call(arguments))
      console.log('args:', args)
    }
  }
})()
// cost(100)
// cost(200)
// console.log(cost())

/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) = 6
 * add(1, 2, 3)(4) = 10
 * add(1)(2)(3)(4)(5) = 15
 */
function add() {
  var arr = Array.prototype.slice.call(arguments)
  var f = function () {
    arr.push(...arguments)
    return f
  }
  f.toString = function () {
    return arr.reduce((a, b) => a + b)
  }
  return f
}
console.log(Number(add(1, 2)(3)))
console.log(add(1, 2, 3, 4).toString())
