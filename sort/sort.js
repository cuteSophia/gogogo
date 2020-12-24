/**
 * sort() 排序：改变原数组，返回排序后的数组
 *
 */
let arr = [3, 15, 8, 29, 102, 22]

// 升序
arr.sort((a, b) => a - b)
console.log(arr)

// 降序
arr.sort((a, b) => b - a)

// 默认转化为字符串，根据 `UTF-16编码` 进行排序
arr.sort()
// console.log(arr) // [ 102, 15, 22, 29, 3, 8 ]

/**
 * 实现 sort()
 */

Array.prototype.mySort = function (callback) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i; j++) {
      if (callback(this[j], this[j + 1]) >= 0) {
        let tmp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = tmp
      }
    }
  }
  return this
}

let arr5 = [3, 15, 8, 29, 102, 22]

arr5.mySort((a, b) => a - b)

console.log(arr5)
// console.log(arr4)
