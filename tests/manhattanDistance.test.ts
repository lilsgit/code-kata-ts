import {manhattanDistanceCalculator, Point} from "./mantattanDistanceKata";

describe('manhattan distance calculator', () => {
  it('should return 1 for [0, 0] and [0, 1]', () => {
    const pointA = new Point(0, 0);
    const pointB = new Point(0, 1);
    const distance = manhattanDistanceCalculator(pointA, pointB);
    expect(distance).toBe(1);
  });

  it('should return 4 for [0, 0] and [2, 2]', () => {
    const pointA = new Point(0, 0);
    const pointB = new Point(2, 2);
    const distance = manhattanDistanceCalculator(pointA, pointB);
    expect(distance).toBe(4);
  });

  it('should return 1 for [2, 3] and [1, 4]', () => {
    const pointA = new Point(0, 0);
    const pointB = new Point(2, 2);
    const distance = manhattanDistanceCalculator(pointA, pointB);
    expect(distance).toBe(4);
  });
});