async function async1() {
  console.log('async1 start') // 2
  await async2().then((res) => {
    console.log(res) // 9
  })
  console.log('async1 end') // 10
}

async function async2() {
  return new Promise((res, rej) => {
    console.log('promise1') // 3
    res('promise1 res')
  }).then((res) => {
    console.log(res) // 6
    console.log('promise2') // 7
    return 'promise2 res'
  })
}

console.log('script start') // 1

setTimeout(() => {
  console.log('setTimeout') // 11
}, 0)

async1()

new Promise((res) => {
  console.log('promise3') // 4
  res()
}).then(() => {
  console.log('promise4') // 8
})

console.log('script end') // 5
