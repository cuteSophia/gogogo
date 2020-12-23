let temp = 16
Object.defineProperty(a, 'age', {
  get: function () {
    return temp
  },
  set: function (val) {
    temp = val + 2
  },
})
console.log(a.age) // 16
a.age = 17
console.log(a.age) // 19
