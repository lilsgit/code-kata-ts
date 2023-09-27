import {interestCalculator} from "../questions/interestCalculator";

describe('interest rate calculator', () => {
  describe('when I have £0 in the bank account', () => {
    it('I should receive £ interest', () => {
      const interest = interestCalculator(0);
      expect(interest).toBe(0);
    })
  });
  describe('when I have £500 in the bank account', () => {
    it('I should receive £5 interest', () => {
      const interest = interestCalculator(500);
      expect(interest).toBe(5);
    })
  });
  describe('when I have £2500 in the bank account', () => {
    it('I should receive £50 interest', () => {
      const interest = interestCalculator(2500);
      expect(interest).toBe(50);
    })
  });
  describe('when I have £8000 in the bank account', () => {
    it('I should receive £240 interest', () => {
      const interest = interestCalculator(8000);
      expect(interest).toBe(240);
    })
  });
})