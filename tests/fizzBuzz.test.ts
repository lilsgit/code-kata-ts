import {fizzbuzzFunction} from "../questions/fizzbuzz";

describe('fizzbuzz', () => {
  describe('when giving a number 3', () => {
    it('should return fizz', () => {
      const result = fizzbuzzFunction(3);
      expect(result).toBe('fizz');
    });
  });
  describe('when giving a number thats a multiple of 3', () => {
    it('should return fizz', () => {
      const result = fizzbuzzFunction(9);
      expect(result).toBe('fizz');
    });
  });
  describe('when giving a number 5', () => {
    it('should return buzz', () => {
      const result = fizzbuzzFunction(5);
      expect(result).toBe('buzz');
    })
  });
  describe('when giving a thats a multiple of 5', () => {
    it('should return buzz', () => {
      const result = fizzbuzzFunction(25);
      expect(result).toBe('buzz');
    })
  });
  describe('when giving a number 15', () => {
    it('should return fizzbuzz', () => {
      const result = fizzbuzzFunction(15);
      expect(result).toBe('fizzbuzz');
    })
  });
  describe('when giving a number 22', () => {
    it('should return number 22', () => {
      const result = fizzbuzzFunction(22);
      expect(result).toBe(22);
    })
  });
})