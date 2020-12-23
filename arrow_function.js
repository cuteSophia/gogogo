/**
 * 箭头函数和普通函数有什么区别？浏览器和 node 中有什么区别？
 *
 * 箭头函数的特点：（箭头函数的风格就是 lamda 表达式）
 *
 * 1. 普通函数 this 指向函数调用时所在的上下文，箭头函数没有自己的 this，指向箭头函数定义时所在的上下文
 * 2. 箭头函数不可以被当作构造函数，也不可以使用 new 命令创建实例，因为它没有 prototype 属性
 * 3. 箭头函数不可以使用 arguments 对象，这个对象在函数体内不存在
 * 4. 箭头函数也无法调用 call 和 apply，因为它没有自己的 this 和 arguments
 */

let obj = {
  name: 'rose',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this)
  },
}

obj.normal() // this -> 当前 obj 对象 rose
obj.arrow() // 浏览器中this -> window / node中this -> {}

obj.normal.call({ name: 'jack' }) // jack

/**
 * 为什么箭头函数不能作为构造函数？为什么不能用 new 操作符？
 *
 * 1. 箭头函数没有自己的 this
 * 2. 箭头函数没有 prototype 属性，而 new 的操作就是要将实例对象的 __proto__ 属性指向构造函数的 prototype
 */
