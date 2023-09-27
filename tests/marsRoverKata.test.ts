import {Direction, Obstacle, Rover} from "../questions/marsRoverKata";


describe('mars Rover kata', () => {
  let roverLocation: Rover;
  let obstacleList: [number, number][];
  beforeEach(() => {
    roverLocation = new Rover(0, 0, Direction.North, Obstacle.Safe);
    obstacleList = [[1, 4], [8, 8], [7, 4], [6, 5]];
  });
  describe('when there is no obstacles', () => {
    describe('when sending move forward command', () => {
      it('the new location should be (0, 1, Direction.NORTH)', () => {
        const newLocation = roverLocation.sendCommands('F', obstacleList);
        expect(roverLocation.x).toBe(0);
        expect(roverLocation.y).toBe(1);
        expect(roverLocation.direction).toBe(Direction.North);
        expect(roverLocation.obstacle).toBe(Obstacle.Safe);
      })
    });
    describe('when sending move backends command', () => {
      it('the new location should be (0, -1, Direction.NORTH)', () => {
        const newLocation = roverLocation.sendCommands('B', obstacleList);
        expect(roverLocation.x).toBe(0);
        expect(roverLocation.y).toBe(-1);
        expect(roverLocation.direction).toBe(Direction.North);
        expect(roverLocation.obstacle).toBe(Obstacle.Safe);
      })
    });
    describe('when sending rotate left command', () => {
      it('the new location should be (0, 0, Direction.WEST)', () => {
        const newLocation = roverLocation.sendCommands('L', obstacleList);
        expect(roverLocation.x).toBe(0);
        expect(roverLocation.y).toBe(0);
        expect(roverLocation.direction).toBe(Direction.West);
        expect(roverLocation.obstacle).toBe(Obstacle.Safe);
      })
    });
    describe('when sending rotate right command', () => {
      it('the new location should be (0, 0, Direction.EAST)', () => {
        const newLocation = roverLocation.sendCommands('R', obstacleList);
        expect(roverLocation.x).toBe(0);
        expect(roverLocation.y).toBe(0);
        expect(roverLocation.direction).toBe(Direction.East);
        expect(roverLocation.obstacle).toBe(Obstacle.Safe);
      })
    });
    describe('when sending move forward and then rotate right command', () => {
      it('the new location should be (0, 1, Direction.EAST)', () => {
        const newLocation = roverLocation.sendCommands('FR', obstacleList);
        expect(roverLocation.x).toBe(0);
        expect(roverLocation.y).toBe(1);
        expect(roverLocation.direction).toBe(Direction.East);
        expect(roverLocation.obstacle).toBe(Obstacle.Safe);
      })
    });
  });

  describe('when there are obstacles', () => {
    describe('when sending move forward command with an obstacle ahead', () => {
      it('the new location should be (5, 5, Direction.EAST, STOPPED)', () => {
        const newLocation = roverLocation.sendCommands('FFFFFRFFFFFF', obstacleList);
        expect(roverLocation.x).toBe(5);
        expect(roverLocation.y).toBe(5);
        expect(roverLocation.direction).toBe(Direction.East);
        expect(roverLocation.obstacle).toBe(Obstacle.Stopped);
      })
    });
  });

  describe('calculateSafeRoute', () => {
    it('should return a command string to move to a given coordinate safely', () => {
      const rover = new Rover(0, 0, Direction.North, Obstacle.Safe);
      const obstacles = [[0, 1], [1, 1], [2, 2]];
      const commandString = roverLocation.calculateSafeRoute(6, 7, obstacles);
      expect(commandString).toEqual('RFFFFFFLFFFFFFF');
    });

    it('should return an empty command string if the destination is already the rover’s position', () => {
      const rover = new Rover(0, 0, Direction.North, Obstacle.Safe);
      const obstacles = [[0, 1], [1, 1], [2, 2]];
      const commandString = roverLocation.calculateSafeRoute(0, 0, obstacles);
      expect(commandString).toEqual('');
    });

    it('should return an empty command string if the destination is unreachable', () => {
      const rover = new Rover(0, 0, Direction.North, Obstacle.Safe);
      const obstacles = [[0, 1], [1, 1], [2, 2]];
      expect(() => {
        roverLocation.calculateSafeRoute(2, 2, obstacles)
      }).toThrow('Cannot reach destination while avoiding all obstacles');
    });
  });


})