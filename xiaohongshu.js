/**
 * 找到给定 id 的所有父亲的 name
 */

let arr = [
  {
    id: 312,
    name: '一',
    children: [
      { id: 12, name: '二', children: [{ id: 89, name: '三' }] },
      { id: 67579, name: 'hhwae', children: [{ id: 88, name: '三' }] },
    ],
  },
  { id: 523, name: 'afw' },
]

function findNameList(arr, id, nameList) {
  for (var i = 0; i < arr.length; i++) {
   let  nameList2 = nameList
    if (arr[i].id === id) {
      return nameList
    } else if (arr[i].children !== undefined) {
      nameList2.push(arr[i].name)
      nameList = findNameList(arr[i].children, id, nameList2)
    }
  }
  return nameList
}

var nameList = findNameList(arr, 88, [])
console.log(nameList)
