// 计算数组中每个元素出现的次数（阿里）
let arr = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Tiff']
function countNum(arr) {
  return arr.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})
}
console.log(countNum(arr))

const o = { name: 'apple', age: 18 }
console.log('name' in o) // 判断对象中是否存在某属性
// val in obj
