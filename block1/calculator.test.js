// const calculator = require("./calculator");
const myCalculator = require("./calculator");


// describe("My first calculator test", () => {
//     var calc = calculator(2, 3);
//     // console.log(calc);
//     test('Adding 2+3 : 5 ', () => {
//         expect(calculator(2, 5)).toBe(5);
//     })
// })

describe("My 2nd calculator test", () => {

    test('Adding 2+3 : 5 ', () => {
        expect(myCalculator.add(2, 5)).toBe(7);
    })
})
