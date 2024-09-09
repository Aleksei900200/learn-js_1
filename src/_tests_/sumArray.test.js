import sumArray from '../utils/sumArray';

describe('sum of array except the highest and the lowest element ', () => {
  const string = 'azsdasd';
  const emptyArray = [];
  const oneElementArray = [5];
  const firstArray = [6, 2, 1, 8, 10];
  const secondArray = [1, 1, 11, 2, 3];

  it('Переменная строка', () => {
    expect(sumArray(string)).toBe(0);
  }),
    it('Переменная - пустой массив', () => {
      expect(sumArray(emptyArray)).toBe(0);
    });
  it('Массив с одном елементом', () => {
    expect(sumArray(oneElementArray)).toBe(0);
  });
  it('Массив 1', () => {
    expect(sumArray(firstArray)).toBe(16);
  });
  it('Массив 2', () => {
    expect(sumArray(secondArray)).toBe(6);
  });
});
