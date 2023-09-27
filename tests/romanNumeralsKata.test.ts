import {numberRomanNumeralsConvertor, romanNumeralsNumberConvertor} from "../questions/romanNumeralsKata";

describe('romanNumeralsNumberConvertor', () => {
  describe('normal numbers to roman numerals', () => {
    describe('when I give a number outside of 1 to 3000', () => {
      it('should return me an error message', () => {
        expect(() => {
          romanNumeralsNumberConvertor(-34)
        }).toThrow('invalid number');
      });
    });
    describe('when I give a number 1', () => {
      it('should return me Roman Numeral I', () => {
        const result = romanNumeralsNumberConvertor(1);
        expect(result).toBe('I');
      });
    });
    describe('when I give a number 7', () => {
      it('should return me Roman Numeral VII', () => {
        const result = romanNumeralsNumberConvertor(7);
        expect(result).toBe('VII');
      });
    });
    describe('when I give a number 324', () => {
      it('should return me Roman Numeral CCCXXIV', () => {
        const result = romanNumeralsNumberConvertor(324);
        expect(result).toBe('CCCXXIV');
      });
    });
    describe('when I give a number 2351', () => {
      it('should return me Roman Numeral MMCCCLI', () => {
        const result = romanNumeralsNumberConvertor(2351);
        expect(result).toBe('MMCCCLI');
      });
    });
  });
  describe('roman numerals to normal numbers', () => {
    describe('when I give a Roman Numeral I', () => {
      it('should return me number 1', () => {
        const result = numberRomanNumeralsConvertor('I');
        expect(result).toBe(1);
      });
    });
    describe('when I give a Roman Numeral VII', () => {
      it('should return me number 7', () => {
        const result = numberRomanNumeralsConvertor('VII');
        expect(result).toBe(7);
      });
    });
    describe('when I give a Roman Numeral CCCXXIV', () => {
      it('should return me number 324', () => {
        const result = numberRomanNumeralsConvertor('CCCXXIV');
        expect(result).toBe(324);
      });
    });
    describe('when I give a Roman Numeral MMCCCLI', () => {
      it('should return me number 2351', () => {
        const result = numberRomanNumeralsConvertor('MMCCCLI');
        expect(result).toBe(2351);
      });
    });
  });
});