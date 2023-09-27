import {add, divide, multiply, subtract} from "../questions/simpleCalculator";

describe('simple calculator', () => {
  describe("add", () => {
    it("should add two numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      expect(subtract(3, 2)).toBe(1);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      expect(divide(6, 2)).toBe(3);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
    });
  });
});
