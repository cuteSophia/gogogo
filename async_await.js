/**
 * async 返回一个 Promise 对象
 * await 后面跟一个 Promise 对象
 */
function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), delay)
  })
}
async function a1() {
  try {
    const result = await Promise.resolve(2)
    return result
  } catch (err) {}
}
// a1().then((res) => console.log(res))

/**
 * async 和 promise 的区别？
 *
 * 1. 相同点：它们都是异步编程的方案，可以解决回调地狱那样的问题
 * 2. async/await 写法更简洁，看起来像同步代码一样；而 promise 需要进行链式调用获取结果
 * 3. async/await 也是基于 promise 实现的
 */

/**
 * 页面延迟至少1s再结束loading（字节）
 */
async function handleClick() {
  // loading至少持续1秒
  let loading = true
  console.log(loading)
  const ajax = await Promise.resolve(1)
  const delay = new Promise((resolve) => {
    setTimeout(() => resolve('延迟1秒'), 1000)
  })
  Promise.all([ajax, delay])
    .then((res) => {
      console.log(res)
      loading = false
      console.log(loading)
    })
    .catch((err) => {
      throw err
    })
}
handleClick()
