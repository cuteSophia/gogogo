/**
 * 多个数组的并集、交集、差集
 */

let arr1 = [1, 2, 1]
let arr2 = [7, 2, 9]

// 并集
let union = [...new Set([...arr1, ...arr2])]
console.log(union)

// 交集
let intersect = [...new Set(arr1.filter((x) => new Set(arr2).has(x)))]
console.log(intersect)

// 差集
let difference = [
  ...new Set([
    ...arr1.filter((x) => !new Set(arr2).has(x)),
    ...arr2.filter((x) => !new Set(arr1).has(x)),
  ]),
]
console.log(difference)
