/**
 * 冒泡排序
 *
 */

let arr = [29, 3, 102, 15, 8, 22];

function bubbleSort(arr) {
  var flag = true; // optimize
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // change each other
        flag = false;
      }
    }
    if (flag) break;
  }
  return arr;
}

let result = bubbleSort(arr);
console.log(result);
