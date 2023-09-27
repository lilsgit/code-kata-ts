export const bowlingScoreCalculator = (balls: number[]): number => {
  let score = 0;
  let ballIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
    const firstBall = balls[ballIndex];
    const secondBall = balls[ballIndex + 1];
    const isStrike = firstBall === 10;
    const isSpare = firstBall + secondBall === 10;

    score += firstBall + secondBall;

    if (isStrike) {
      score += balls[ballIndex + 1] + balls[ballIndex + 2];
      ballIndex += 1;
    } else if (isSpare) {
      score += balls[ballIndex + 2];
      ballIndex += 2;
    } else {
      ballIndex += 2;
    }
  }

  return score;
};