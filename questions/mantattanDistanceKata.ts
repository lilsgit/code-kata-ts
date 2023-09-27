export class Point {
  constructor(private readonly x: number, private readonly y: number) {
  }

}

export const manhattanDistanceCalculator = (point1: Point, point2: Point) => {
  const xDis = Math.abs(point1['x'] - point2['x']);
  const yDis = Math.abs(point1['y'] - point2['y']);
  return xDis + yDis;
};