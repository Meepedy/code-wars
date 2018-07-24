function cubeOdd(arr) {
  let result = arr
    .filter(x => x % 2 !== 0)
    .reduce((x, y) => x += Math.pow(y,3), 0);
  return isNaN(result) ? result = undefined : result;
}