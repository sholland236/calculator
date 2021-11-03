import {add} from "./calculations.js";
import {subtract} from "./calculations.js";
import {multiply} from "./calculations.js";
import {divide} from "./calculations.js";

test("Function should return 5", () => {
    // Arrange
    let result;
    const outcome = 5;
    // Act
    result = add(3, 2);
    // Assert
    expect(result).toBe(outcome);
})