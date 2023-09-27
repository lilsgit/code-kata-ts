import {binarySearch} from "../questions/karateChopKata";

describe('Karate Chop', () => {
  describe('when giving 3 and search in a list [1, 2]', () => {
    it('should return -1', () => {
      const result = binarySearch(3, [1, 2]);
      expect(result.indexLocation).toBe(-1);
      expect(result.chopTimes).toBe(1);
    });
  });

  describe('when giving 3 and search in a list [1, 2, 3]', () => {
    it('should return 2', () => {
      const result = binarySearch(3, [1, 2, 3]);
      expect(result.indexLocation).toBe(2);
      expect(result.chopTimes).toBe(2);
    });
  });

  describe('when giving 3 and search in a list [1, 2, 3, 4]', () => {
    it('should return 2', () => {
      const result = binarySearch(3, [1, 2, 3, 4]);
      expect(result.indexLocation).toBe(2);
      expect(result.chopTimes).toBe(2);
    });
  });
});