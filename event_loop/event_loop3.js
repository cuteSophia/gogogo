let arr = []
setTimeout(function () {
  arr.push(1)
})
Promise.resolve().then(() => {
  arr.push(2)
})
new Promise(() => {
  arr.push(7)
})
async function a() {
  arr.push(3)
  await b()
  arr.push(4)
}
async function b() {
  arr.push(5)
}
a()
arr.push(6)
setTimeout(() => {
  console.log(arr.join('')) // 7356241
})
