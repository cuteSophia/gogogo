/**
 * 请求失败最多重试5次
 */

// getData().then().catch()
function getData() {
  return new Promise(function (resolve, reject) {
    var num = Math.ceil(Math.random() * 20)
    console.log('随机数：', num)
    if (num <= 5) {
      resolve(num)
    } else {
      reject('执行失败')
    }
  })
}

function myGetData(getData) {
  var times = 5
  return new Promise(function (resolve, reject) {
    function attempt() {
      times = times - 1
      getData()
        .then(resolve)
        .catch((err) => {
          if (times === 0) {
            reject(err)
          } else {
            attempt()
          }
        })
    }
    attempt()
  })
}
myGetData(getData)
  .then((res) => console.log('成功：', res))
  .catch((err) => console.log(err))
