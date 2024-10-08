export function persistence(num) {
  if (typeof num === 'number') {
    let times = 0;
    num = num.toString();
    while (num.length > 1) {
      times++;
      num = num
        .split('')
        .map(Number)
        .reduce((a, b) => a * b)
        .toString();
    }
    return times;
  } else {
    return false;
  }
}
