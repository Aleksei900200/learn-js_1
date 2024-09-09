import { isWalkOk } from '../utils/isWalkOk.js';

describe('test for 10 minutes walk', () => {
  const anyVariable = 'azsdasd';
  const emptyArray = [];
	const rigthWalk=['n','s','w','e','n','s','w','e','n','s'];
	const wrongWalk=['n','n','n','s','n','s','n','s','w'];

  it('Переменная не массив', () => {
    expect(isWalkOk(anyVariable)).toBe('Данные не корректны - не массив');
  }),
    it('Переменная - пустой массив', () => {
      expect(isWalkOk(emptyArray)).toBe('Данные не корректны - массив пустой');
    });
		it('Правильный маршрут', () => {
      expect(isWalkOk((rigthWalk))).toBeTruthy();
    });
		it('Неправильный маршрут', () => {
      expect(isWalkOk((wrongWalk))).toBeFalsy();
    });
});
