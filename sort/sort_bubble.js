/**
 * 冒泡排序
 *
 */

let arr = [29, 3, 102, 15, 8, 22];

function bubbleSort(arr) {
  var flag = true;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
      }
    }
    if (flag) break;
  }
  return arr;
}

function bubbleSort2(arr) {
  let flag = true; // 优化
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
      }
    }
    if (flag) break;
  }
  return arr;
}

let result = bubbleSort(arr);
console.log(result);
