/**
 * ES6 和 ES5 创建类的区别？
 *
 * 1. class 中使用严格模式，比如变量必须先声明再使用
 * 2. class 必须使用 new 命令调用，函数可以直接调用
 * 3. class 中定义的所有方法都不可枚举
 */

// 引用一个未声明的变量
function Bar() {
  this.bar = 42
}
Bar.answer = function () {
  return 42
}
Bar.prototype.print = function () {
  console.log(this.bar)
}
const barKeys = Object.keys(Bar) // ['answer']
// console.log(barKeys)
const barProtoKeys = Object.keys(Bar.prototype) // ['print']
// console.log(barProtoKeys)

class Foo {
  constructor() {
    this.foo = 42
  }
  static answer() {
    return 42
  }
  print() {
    console.log(this.foo)
  }
}
const fooKeys = Object.keys(Foo) // []
// console.log(fooKeys)
const fooProtoKeys = Object.keys(Foo.prototype) // []
// console.log(fooProtoKeys)
