export function isWalkOk(arr) {
  if (!Array.isArray(arr)) {
    return 'Данные не корректны - не массив';
  } else if (!arr.length) {
    return 'Данные не корректны - массив пустой';
  } else {
    return tenMinutesWalk(arr);
  }
}
let tenMinutesWalk = (walk) => {
  let i = 0;
  walk.forEach((el) => {
    el === 'e'
      ? (i -= 1)
      : el === 'w'
      ? (i += 1)
      : el === 'n'
      ? (i -= 1)
      : (i += 1);
  });
  return i === 0 && walk.length === 10 ? true : false;
};
//Описание задачи в файле README_isWalkOkey