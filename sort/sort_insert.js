let arr = [5, 6, 4, 3, 8, 1];

function insertionSort(arr) {
  // arr 待排序序列，返回排序好的序列
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // 记录插入的元素
    let j = i - 1; // 有序序列最大下标
    console.log("i:", i, ", key:", key);
    while (j >= 0 && arr[j] > key) {
      console.log("i:", i, " ,j:", j);
      // 找最佳位置
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key; // 替换被插入的值
  }
  return arr;
}

let result = insertionSort(arr);
console.log(result);
