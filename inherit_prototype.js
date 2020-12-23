/**
 * 继承：为了避免重复造轮子，尽可能的复用代码，让一个对象可以使用另一个对象上的方法和属性，可以通过继承来实现
 *
 * 什么是原型链？
 * 如何实现继承？
 * ES6 和 ES5 实现继承除了写法以外，有什么区别？
 * 用工厂模式实现一个继承
 *
 */

/**
 * 原型链：每个对象的私有属性 __proto__ 指向它的原型对象 prototype，层层向上
 * Object.prototype.__proto__ === null
 */

let o = {}
// console.log(o.__proto__ === Object.prototype) // o 继承对象上的方法
// console.log(Object.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

/**
 * 实现继承：Cat.prototype = new Animal()
 *
 * 构造函数的 prototype 上的属性和方法，都会被实例继承
 * 实例会继承构造函数的 prototype
 *
 * 通过原型链实现继承的本质是，重写原型对象。
 */

function Animal(type, name) {
  this.type = type || '动物'
  this.name = name || '无名氏'
}
Animal.prototype.getInfo = function () {
  console.log(this.type, '的名字叫：', this.name)
}
function Cat(name) {
  this.type = '猫'
  this.name = name
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
const cat = new Cat('Tom')
// cat.getInfo()

/**
 * 构造函数
 */
function A() {}
// console.log(A.prototype.constructor === A)

/**
 * ES6 和 ES5 实现继承除了写法以外，还有什么区别？
 *
 * 搞清楚，不是问 ES6 和 ES5 创建类有什么区别
 *
 * 通过 extends 继承的子类可以直接通过 __proto__ 寻址到父类
 */

// ES6
class P {}
class C extends P {}
// 通过 extends 继承的子类可以通过 __proto__ 直接寻址到父类
// console.log(C.__proto__ === P)
// console.log(P.__proto__ === Function.prototype)

// ES5
function P5() {}
function C5() {}
C5.prototype = new P5()
C5.prototype.constructor = C5
// console.log(C5.__proto__ === Function.prototype)

// 小红书面试题
class Person {
  func() {
    console.log('func Person')
  }
}
class Student extends Person {
  func() {
    console.log('func Student')
  }
}
const parent = new Person()
const child = new Student()
const child2 = new Student()
// console.log(parent.__proto__ === Person.prototype)
// console.log(child.__proto__ === Student.prototype)
// console.log(Student.__proto__ === Person)
// console.log(Person.__proto__ === Function.prototype)
// console.log(Student.prototype.__proto__ === Person.prototype)
// console.log(child.__proto__.__proto__ === Person.prototype)

// Student.prototype.name = "1"

child2.name = 'child2'
Student.prototype.func = function () {
  console.log('func Student 2')
}
Object.prototype.name = 'object'
// child.__proto__.name = "2"
// parent.__proto__.name = "3"

console.log(Student.prototype.name)
console.log(child2.name)
console.log(child2.__proto__.name)

function fn(params) {}

var obj = {}
obj.__proto__.name = '__00__'

fn.name = 123
console.log(fn.name)
console.log(fn.prototype.__proto__ === Object.prototype)
