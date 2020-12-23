/**
 * 三个状态：pending、fulfilled、rejected
 */

const p = new Promise((resolve, reject) => {
  if (true) {
    resolve(1)
  } else {
    reject(2)
  }
})

p.then((res) => {
  // console.log(res)
})
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    // 回调函数没有参数
    // console.log('finally')
  })

Promise.resolve(3).then((res) => {
  // console.log(res)
}) // 3
Promise.reject(4).catch((err) => {
  // console.log(err)
}) // 4

/**
 * .then 方法连续链式调用，拿到的是上一个 then 方法中的返回值
 * 也可以返回一个 promise 对象
 */
Promise.resolve(1)
  .then((res) => {
    console.log('then1:', res)
    return Promise.resolve(2)
  })
  .then((res) => {
    console.log('then2:', res)
  })

/**
 * 实现 Promise.finally()
 */
Promise.prototype.myFinally = function (cb) {
  const P = this.constructor
  return this.then(
    (value) => {
      return P.resolve(cb()).then(() => value)
    },
    (reason) => {
      return P.resolve(cb()).then(() => {
        throw reason
      })
    }
  )
}

Promise.resolve().myFinally(() => {
  // console.log('myFinally')
})

/**
 * Promise.resolve() / Promise.reject() 返回一个 promise 对象
 */

Promise.resolve(1)
// 等同于
new Promise((resolve) => resolve(1))

/**
 * Promise.all([p1, p2, p3])
 * 都 fulfilled， 结果才是 fulfilled
 * 只要有一个 rejected，结果就是 rejected
 */
const p1 = new Promise((resolve) => resolve('p1'))
const p2 = new Promise((resolve) => resolve('p2'))
// const p3 = Promise.reject('p3')
// Promise.all([p1, p3])
//   .then((res) => {
//     console.log('all1:', res)
//   })
//   .catch((err) => {
//     console.log('all2:', err)
//   })

/**
 * Promise.race([p1, p2, p3])
 * 只要有一个状态改变了，结果就是该状态
 */

// Promise.race([p1, p2])
//   .then((res) => {
//     console.log('race1:', res)
//   })
//   .catch((err) => {
//     console.log('race2:', err)
//   })

/**
 * Promise.allSettled([p1, p2, p3])
 * 状态都改变后，才返回结果，状态总是 fulfilled
 */

// Promise.allSettled([p1, p2]).then((res) => {
//   console.log('allSettled:', res)
// })

/**
 * Promise.any([p1, p2, p3])
 * 只要有一个变成 fulfilled，就变成 fulfilled
 * 三个都变成 rejected，才会变成 rejected
 */
