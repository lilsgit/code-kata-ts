export enum Direction {
  North = 'NORTH',
  East = 'EAST',
  South = 'SOUTH',
  West = 'WEST',
}

export enum Obstacle {
  Stopped = 'STOPPED',
  Safe = 'SAFE'
}

export class Rover {
  constructor(x: number, y: number, direction: Direction, obstacle: Obstacle) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.obstacle = obstacle;
  }

  x: number;
  y: number;
  direction: Direction;
  obstacle: Obstacle;

  sendCommands(commands: string, obstacleList: number[][]): void {
    this.obstacle = Obstacle.Safe;
    for (const command of commands) {
      if (command == 'F') {
        this.moveForward(obstacleList);
      }
      if (command == 'B') {
        this.moveBackwards(obstacleList);
      }
      if (command == 'L') {
        this.rotateLeft();
      }
      if (command == 'R') {
        this.rotateRight();
      }
    }
  };

  calculateSafeRoute(destinationX: number, destinationY: number, obstacleList: number[][]) {
    let commands: string = '';
    let currX: number = this.x;
    let currY: number = this.y;
    let currDir: Direction = this.direction;

    while (currX != destinationX || currY != destinationY) {
      // determine the necessary x and y movements to reach the destination
      let xDiff: number = destinationX - currX;
      let yDiff: number = destinationY - currY;

      // determine the next direction the rover needs to face to move towards the destination
      let nextDir: Direction;
      if (xDiff > 0) {
        nextDir = Direction.East;
      } else if (xDiff < 0) {
        nextDir = Direction.West;
      } else if (yDiff > 0) {
        nextDir = Direction.North;
      } else {
        nextDir = Direction.South;
      }

      // determine the command to rotate to the next direction
      let rotateCommand: string = '';
      if (nextDir == Direction.East) {
        if (currDir == Direction.North) {
          rotateCommand = 'R';
        } else if (currDir == Direction.South) {
          rotateCommand = 'L';
        } else if (currDir == Direction.West) {
          rotateCommand = 'L';
        }
      } else if (nextDir == Direction.North) {
        if (currDir == Direction.East) {
          rotateCommand = 'L';
        } else if (currDir == Direction.South) {
          rotateCommand = 'L';
        } else if (currDir == Direction.West) {
          rotateCommand = 'R';
        }
      } else if (nextDir == Direction.West) {
        if (currDir == Direction.North) {
          rotateCommand = 'L';
        } else if (currDir == Direction.South) {
          rotateCommand = 'R';
        } else if (currDir == Direction.East) {
          rotateCommand = 'L';
        }
      } else {
        if (currDir == Direction.North) {
          rotateCommand = 'L';
        } else if (currDir == Direction.West) {
          rotateCommand = 'L';
        } else if (currDir == Direction.East) {
          rotateCommand = 'R';
        }
      }

      // determine the distance the rover can safely move in the next direction
      let maxDistance: number;
      if (nextDir == Direction.East) {
        maxDistance = obstacleList.reduce((prev, curr) => {
          if (curr[1] === currY && curr[0] > currX) {
            return Math.min(prev, curr[0] - currX - 1);
          }
          return prev;
        }, xDiff);
      } else if (nextDir == Direction.North) {
        maxDistance = obstacleList.reduce((prev, curr) => {
          if (curr[0] === currX && curr[1] > currY) {
            return Math.min(prev, curr[1] - currY - 1);
          }
          return prev;
        }, yDiff);
      } else if (nextDir == Direction.West) {
        maxDistance = obstacleList.reduce((prev, curr) => {
          if (curr[1] === currY && curr[0] < currX) {
            return Math.min(prev, currX - curr[0] - 1);
          }
          return prev;
        }, -xDiff);
      } else {
        maxDistance = obstacleList.reduce((prev, curr) => {
          if (curr[0] === currX && curr[1] < currY) {
            return Math.min(prev, currY - curr[1] - 1);
          }
          return prev;
        }, -yDiff);
      }

      // move the rover in the next direction for the maximum distance possible without colliding with an obstacle
      if (maxDistance > 0) {
        commands += rotateCommand;
        commands += 'F'.repeat(maxDistance);
        currX += maxDistance * (nextDir == Direction.East ? 1 : nextDir == Direction.West ? -1 : 0);
        currY += maxDistance * (nextDir == Direction.North ? 1 : nextDir == Direction.South ? -1 : 0);
        currDir = nextDir;
      } else {
        throw new Error('Cannot reach destination while avoiding all obstacles');
      }
    }

    return commands;
  }

  moveForwardAction() {
    switch (this.direction) {
      case Direction.North:
        this.y = this.y + 1;
        break;
      case Direction.East:
        this.x = this.x + 1;
        break;
      case Direction.South:
        this.y = this.y - 1;
        break;
      case Direction.West:
        this.x = this.x - 1;
        break;
    }
  }

  moveBackwardsAction() {
    switch (this.direction) {
      case Direction.North:
        this.y = this.y - 1;
        break;
      case Direction.East:
        this.x = this.x - 1;
        break;
      case Direction.South:
        this.y = this.y + 1;
        break;
      case Direction.West:
        this.x = this.x + 1;
        break;
    }
  }

  private moveForward(obstacleList: number[][]): void {
    this.moveForwardAction();
    if (obstacleList.some(([ox, oy]) => ox === this.x && oy === this.y)) {
      this.obstacle = Obstacle.Stopped;
      this.moveBackwardsAction();
    }
  }

  private moveBackwards(obstacleList: number[][]): void {
    this.moveBackwardsAction();
    if (obstacleList.some(([ox, oy]) => ox === this.x && oy === this.y)) {
      this.obstacle = Obstacle.Stopped;
      this.moveForwardAction();
    }
  }

  private rotateLeft(): void {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.West;
        break;
      case Direction.East:
        this.direction = Direction.North;
        break;
      case Direction.South:
        this.direction = Direction.East;
        break;
      case Direction.West:
        this.direction = Direction.South;
        break;
    }
  }

  private rotateRight(): void {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.East;
        break;
      case Direction.East:
        this.direction = Direction.South;
        break;
      case Direction.South:
        this.direction = Direction.West;
        break;
      case Direction.West:
        this.direction = Direction.North;
        break;
    }
  }
}