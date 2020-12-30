// 定义类
class Point {
  // 一个类必须有构造函数方法
  constructor(x, y) {
    // this 指向当前的实例对象
    this.x = x;
    this.y = y;

    // return this (默认返回实例对象 this)
  }

  // 某个属性的取值函数
  get prop() {
    return "getter";
  }

  // 某个属性的存值函数
  set prop(value) {
    console.log("setter:", value);
  }

  // 方法不需要加 function 关键字，多个方法之间不加逗号
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  // 类的所有方法都定义在了类的 prototype 属性上，除了静态方法

  // 静态方法只能通过类调用，不能用实例调用
  static classMethod() {
    // this 指向当前类
    console.log(this);
  }
}
let p = new Point(1, 2);

/**
 * 将实例属性定义在类的最顶层，一目了然
 */
class IncreaseCounter {
  _count = 0;
  _num = 123;
  get value() {
    console.log("Getting the current value!");
    return this._count;
  }
  increment() {
    this._count++;
  }
  getNum() {
    console.log(this._num);
  }
}
let c = new IncreaseCounter();

/**
 * 继承 extends
 */
class ColorPoint extends Point {
  // super 既可以当作函数使用，也可以当作对象使用
  constructor(x, y, color) {
    // 调用 super 方法获取父类的 this
    super(x, y);
    this.color = color;
  }
  toString() {
    return this.color + super.toString(); // 调用父类的方法
  }
}
let cp = new ColorPoint(2, 4, "yellow");
