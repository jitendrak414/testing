// function calculator(a = 10, b = 10) {
//     function add() {
//         return a + b
//     }
//     function substract() {
//         return a - b
//     }
//     function multiply() {
//         return a * b
//     }
//     return add()
// }
// module.exports = calculator

const myCalculator = {
    add: function (a, b) {
        return a + b;
    },
    diff: function (a, b) {
        return a - b
    }

}
module.exports = myCalculator