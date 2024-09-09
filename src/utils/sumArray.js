let sumArray = (arr) =>
	Array.isArray(arr)
    ? arr
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((acc, el) => acc + el, 0)
    : 0;

export default sumArray;
