export class BinaryChop {
  indexLocation: number;
  chopTimes: number;
}

export function binarySearch(numberForSearch: number, list: number[]): BinaryChop {
  let startIndex = 0;
  let endIndex = list.length - 1;
  let chopTimes = 0;
  let indexLocation = list.indexOf(numberForSearch);

  while (endIndex >= startIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (list[middleIndex] >= numberForSearch) {
      startIndex = middleIndex + 1;
      chopTimes += 1;
    } else {
      endIndex = middleIndex - 1;
      chopTimes += 1;
    }
  }
  return {
    indexLocation, chopTimes
  }
}