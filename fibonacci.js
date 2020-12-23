/**
 * 斐波那契数列：从第三项开始，每一项都等于前两项之和
 * 1、1、2、3、5、8、13、21、34、55.....
 */

/**
 * 求第50个斐波那契数
 * 尾递归，就是指函数的最后一步是调用本身
 */
function getFibonacci(n, prev = 0, cur = 1) {
  if (n <= 1) return cur
  return getFibonacci(n - 1, cur, prev + cur)
}
// console.log(getFibonacci(20))
// 5 0 1
// 4 1 1
// 3 1 2
// 2 2 3
// 1 3 5

/**
 * 求第20个斐波那契数
 * 该方法会导致50以上卡死，性能非常差
 */
function getFibonacci2(n) {
  if (n === 0 || n === 1) return n
  if (n > 1) {
    return getFibonacci2(n - 1) + getFibonacci2(n - 2)
  }
}
console.log(getFibonacci2(20))

/**
 * 列出20个斐波那契数列
 */
function fibonacci(n) {
  let arr = []

  function fibo(n, prev = 0, cur = 1) {
    arr.push(cur)
    if (n <= 1) return cur
    return fibo(n - 1, cur, prev + cur)
  }
  fibo(n)

  return arr
}
console.log(fibonacci(20))
