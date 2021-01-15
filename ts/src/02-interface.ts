/**
 * 接口：定义变量类型
 */
interface SquareConfig {
  width: number;
  color?: string;
  [propName: string]: any; // 设置任意数量的属性，并且类型随意
}
function createSquare(config: SquareConfig): { area: number; color: string } {
  let newSquare = { area: 100, color: "white" };
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  if (config.color) {
    newSquare.color = config.color;
  }
  return newSquare;
}
let squareOption: SquareConfig = { width: 20, height: 30 };
let mySquare = createSquare(squareOption);

interface Point {
  readonly x: number;
  readonly y: number;
}
let p: Point = { x: 10, y: 20 };
