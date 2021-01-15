let isDone: boolean = false; // 布尔
let count: number = 6; // 所有数字都是浮点类型
let title: string = "apple"; // 字符串
let list1: number[] = [1, 2, 3]; // 数组
let list2: Array<number | string> = ["4", 5, 6]; // 使用数组泛型
let xTuple: [string, number] = ["hello", 10]; // 元组类型：已知元素数量和类型
let o: object = { a: "apple", b: "banana" }; // 对象

// 枚举类型
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Red; // 0
let cName: string = Color[1]; // 'Green'

let anyv: any[] = [1, true, "watermelon"]; // 任意类型

// 当一个函数没有返回值时，返回 void
function warnUser(): void {
  console.log("This is my warning message");
}
let unusable: void = null; // void 类型只能赋值 undefined 和 null

/**
 * 类型断言 as
 *
 * 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。
 * 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
 * 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
 * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
 * 它没有运行时的影响，只是在编译阶段起作用。
 * TypeScript会假设你，程序员，已经进行了必须的检查。
 */

let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

let [first, ...rest] = [1, 2, 3, 4, 5, 6]; // 解构赋值

let book = {
  a: "hongloumeng",
  b: "2020-01-13",
};
let { a: bookName, b: bookTime } = book; // 重新定义变量名

// ?
function getData(data: any) {
  let name = data?.row?.name;
  return name;
}
// 作用相同
function getData2(data: any) {
  let name;
  if (data && data.row) {
    name = data.row.name;
  }
  return name;
}
