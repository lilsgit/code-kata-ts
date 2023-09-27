export function fizzbuzzFunction(number: number) {
  if (number % 3 === 0) {
    if (number % 5 === 0) {
      return 'fizzbuzz'
    } else {
      return 'fizz'
    }
  }
  if (number % 5 === 0) {
    return 'buzz'
  }
  if (number % 3 !== 0 || number % 5 !== 0) {
    return number
  }
}

function runFizzbuzz(num: number) {
  for (let i = 0; i <= num; i++) {
    console.log(`number: ${i}: ${fizzbuzzFunction(i)}`);
  }
}

runFizzbuzz(34);