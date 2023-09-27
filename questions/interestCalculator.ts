export function interestCalculator(number: number) {
  let interest: number;
  if (number < 0) {
    return new Error('Overdraft not allowed');
  }
  if (number >= 0 && number < 1000) {
    interest = number * 0.01
  }

  if (number >= 1000 && number < 5000) {
    interest = number * 0.02
  }
  if (number >= 5000) {
    interest = number * 0.03
  }
  return interest;
}