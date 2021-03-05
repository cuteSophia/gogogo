/**
 * 正则：匹配字符串
 */

// 是否包含数字 +至少1次
const hasNumber = /\d/g.test('app1le')
// console.log(hasNumber)

// 是否包含英文字母(不区分大小写)
const hasLetter = /[a-z]+/gi.test('1A')
// console.log(hasLetter)

// 将 get-element-by-id 转化成驼峰
// \w 匹配一个单字字符（字母、数字或者下划线）
const camel = 'get-element-by-id'.replace(/-\w/g, (str) => {
  return str[1].toUpperCase()
})
// console.log(camel)

// qq号固定6位数字，第一位非0
const isQQ = /^[1-9]\d{5}$/g.test('123456')
// console.log(isQQ)

// 是否英文字母\数字组成，可以都是字母或者数字
const isPassword = /^[A-Za-z0-9]+$/g.test('1231')
// console.log(isPassword)

// 是否英文字母\数字\下划线组成
const isPassword2 = /^\w+$/g.test('7_aA')
// console.log(isPassword2)

// 验证身份证号15或18位或17位数字加x
const isID = /^(\d{15}|\d{18}|\d{17}[Xx])$/g.test('32058219920123912x')
console.log(isID)

// 是否是手机号
const isPhone = /^1[34578]\d{9}$/g.test('11701702779')
// console.log(isPhone)

// 格式化只能输入18位字母和数字
function skuFormat(value) {
	let _value = value.replace(/[^A-Za-z0-9]/g, ''); // 清除数字和字母以外的字符
	_value = _value.substring(0, 18);
	return _value;
}
