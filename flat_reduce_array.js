// 将多维数组转化为一维数组（食亨）
let arr = [1, [2, 3], [4, [5, 6]]]
function flat1(arr) {
	return arr.flat(Infinity)
}
function flat2(arr) {
	return arr.reduce((acc, cur) => {
		return acc.concat(Array.isArray(cur) ? flat2(cur) : cur)
	}, [])
}
console.log(flat2(arr))
