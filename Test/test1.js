// 定义成员：
const sum = function (a, b) {
    return a + b
}
const subtract = function (a, b) {
    return a - b
}
const multiply = function (a, b) {
    return a * b
}
const divide = function (a, b) {
    return a / b
}

module.exports = {sum: sum, subtract: subtract, multiply: multiply, divide: divide}
console.log(module)