var isDone = false; // 布尔
var count = 6; // 所有数字都是浮点类型
var title = "apple"; // 字符串
var list1 = [1, 2, 3]; // 数组
var list2 = ["4", 5, 6]; // 使用数组泛型
var xTuple = ["hello", 10]; // 元组类型：已知元素数量和类型
var o = { a: "apple", b: "banana" }; // 对象
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red; // 0
var cName = Color[1]; // 'Green'
var anyv = [1, true, "watermelon"]; // 任意类型
// 当一个函数没有返回值时，返回 void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = null; // void 类型只能赋值 undefined 和 null
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
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
var _a = [1, 2, 3, 4, 5, 6], first = _a[0], rest = _a.slice(1); // 解构赋值
var book = {
    a: "hongloumeng",
    b: "2020-01-13"
};
var bookName = book.a, bookTime = book.b; // 重新定义变量名
// ?
function getData(data) {
    var _a;
    var name = (_a = data === null || data === void 0 ? void 0 : data.row) === null || _a === void 0 ? void 0 : _a.name;
    return name;
}
// 作用相同
function getData2(data) {
    var name;
    if (data && data.row) {
        name = data.row.name;
    }
    return name;
}
