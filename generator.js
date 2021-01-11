/**
 * Generator 是一个状态机，内部封装了多个状态。
 * 它返回一个遍历器对象，可以依次遍历内部的每个状态。
 * yield / return 后面跟一个状态
 *
 * yield 是暂停执行的标记，next 可以恢复执行
 *
 * 可以用 for...of 循环，value 为 yield 后面的值
 */

function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}
var hw = helloWorldGenerator();
// console.log(hw.next()); // { value: 'hello', done: false }
// console.log(hw.next()); // { value: 'world', done: false }
// console.log(hw.next()); // { value: 'ending', done: true }
// console.log(hw.next()); // { value: undefined, done: true }
for (var v of hw) {
  // console.log(v);
  // hello
  // world
}

/**
 * 拍平多维数组
 */
var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (arr) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (typeof item === "number") {
      yield item;
    } else {
      yield* flat(item);
    }
  }
};
for (var v of flat(arr)) {
  // console.log(v);
}

/**
 * yield 表达式本身没有返回值，或者说总是返回 undefined。
 * next 方法可以传入参数，当作上一个 yield 表达式的返回值。
 */
function* dataConsumer() {
  console.log("Started");
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return "result";
}
var genObj = dataConsumer();
// genObj.next();
// genObj.next("a");
// genObj.next("b");

/**
 * 将对象变成可用 for...of 遍历
 */
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);
  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}
let jane = { first: "Jane", last: "Doe" };
for (let [key, value] of objectEntries(jane)) {
  // console.log(`${key}: ${value}`);
}

function* numbers() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
}
console.log([...numbers()]) // [1, 2]
