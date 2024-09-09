import { persistence } from '../utils/multiPersistence';

describe('multiplicative persistence', () => {
  const string = 'azsdasd';
  const oneDigitNumber = 4;
  const twoDigitNumber = 39;
  const threeDigitNumber = 999;

  it('Переменная строка', () => {
    expect(persistence(string)).toBeFalsy();
  }),
    it('Переменная - простое число', () => {
      expect(persistence(oneDigitNumber)).toBe(0);
    });
  it('Двузначное число', () => {
    expect(persistence(twoDigitNumber)).toBe(3);
  });
  it('Массив 1', () => {
    expect(persistence(threeDigitNumber)).toBe(4);
  });
});
