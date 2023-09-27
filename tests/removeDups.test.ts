import {removeDuplicates} from "../questions/removeDups";

describe('remove duplications', () => {
  describe('when giving a sorted list [1, 1, 2, 3, 4, 4, 5]', () => {
    it('should return the deduped list', () => {
      const result = removeDuplicates([1, 1, 2, 3, 4, 4, 5]);
      expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    });
  });
  describe('when giving a sorted list [1, 2, 3, 4, 7]', () => {
    it('should return the deduped list', () => {
      const result = removeDuplicates([1, 2, 3, 4, 7]);
      expect(result).toStrictEqual([1, 2, 3, 4, 7]);
    });
  });
});