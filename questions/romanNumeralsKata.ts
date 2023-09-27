export function romanNumeralsNumberConvertor(number: number) {
  let romanNumeral = '';
  const numerList = [
    {value: 1000, numeral: 'M'},
    {value: 900, numeral: 'CM'},
    {value: 500, numeral: 'D'},
    {value: 400, numeral: 'CD'},
    {value: 100, numeral: 'C'},
    {value: 90, numeral: 'XC'},
    {value: 50, numeral: 'L'},
    {value: 40, numeral: 'XL'},
    {value: 10, numeral: 'X'},
    {value: 9, numeral: 'IX'},
    {value: 5, numeral: 'V'},
    {value: 4, numeral: 'IV'},
    {value: 1, numeral: 'I'},
  ];

  if (number <= 0 || number > 3000) {
    throw new Error('invalid number');
  }
  for (const x of numerList) {
    while (number >= x.value) {
      romanNumeral = romanNumeral + x.numeral;
      number = number - x.value;
    }
  }
  return romanNumeral;
}

export function numberRomanNumeralsConvertor(numeral: string) {
  const numerList = [
    {value: 1000, numeral: 'M'},
    {value: 900, numeral: 'CM'},
    {value: 500, numeral: 'D'},
    {value: 400, numeral: 'CD'},
    {value: 100, numeral: 'C'},
    {value: 90, numeral: 'XC'},
    {value: 50, numeral: 'L'},
    {value: 40, numeral: 'XL'},
    {value: 10, numeral: 'X'},
    {value: 9, numeral: 'IX'},
    {value: 5, numeral: 'V'},
    {value: 4, numeral: 'IV'},
    {value: 1, numeral: 'I'},
  ];

  let result = 0;
  let i = 0;

  while (i < numeral.length) {
    for (const y of numerList) {
      if (numeral.substring(i, i + y.numeral.length) === y.numeral) {
        result = y.value + result;
        i = y.numeral.length + i;
        break;
      }
    }
  }

  return result;
}