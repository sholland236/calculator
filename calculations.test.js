import add from "./addition.js";
import subtract from "./subtraction.js";
import multiply from "./multiply.js";
import divide from "./divide.js";


describe("add() tests", () => {
    test("Function should return 5", () => {
        const outcome = 5;
        const result = add(3, 2);
        expect(result).toBe(outcome);
    })
    test("Function should be able to handle negative values",() => {
        expect(add(-7, 3)).toBe(-4);
    })
})

describe("subtract() tests", () => {
    test("Function should return 3", () => {
        expect(subtract(5, 2)).toBe(3);
    })
    test("Function should be able to handle negative numbers", () => {
        expect(subtract(-4, 3)).toBe(-7);
    })
})

describe("multiply() tests", () => {
    test("Function shoudl return 15", () => {
        expect(multiply(5, 3)).toBe(15);
    })
    test("Function should be able to handle negative numbers", () => {
        expect(multiply(-7, 3)).toBe(-21);
    })
})

describe("divide() tests", () => {
    test("Function should return 7", () => {
        expect(divide(21, 3)).toBe(7);
    })
    test("Function should be able to handle negative numbers", () => {
        expect(divide(-12,4)).toBe(-3);
    })
})