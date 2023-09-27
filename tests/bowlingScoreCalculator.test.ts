import {bowlingScoreCalculator} from "../questions/bowlingScoreCalculator";

describe('bowling score calculator', () => {
  it('should return a score 0 for all 0, 0 in the 10 frames', () => {
    const result = bowlingScoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result).toBe(0);
  });
  it('should return a score 20 for all 1, 1 in the 10 frames', () => {
    const result = bowlingScoreCalculator([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(result).toBe(20);
  });
  it('should return a score 150 for all 5, 5 in the 10 frames', () => {
    const result = bowlingScoreCalculator([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
    expect(result).toBe(150);
  });
  it('should return a score 110 for all 1, 9 in the 10 frames', () => {
    const result = bowlingScoreCalculator([1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1]);
    expect(result).toBe(110);
  });
  it('should return a score 300 for all 10 in the 10 frames', () => {
    const result = bowlingScoreCalculator([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    expect(result).toBe(300);
  });
  it('should return a score 91 for one 10 and half 5 half 1 in the 10 frames', () => {
    const result = bowlingScoreCalculator([10, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(result).toBe(86);
  });
})