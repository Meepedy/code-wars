function cakes(recipe, available) {
  let result = Object.keys(recipe)
    .map(x => Math.floor(available[x] / recipe[x]))
    .reduce((x, y) => Math.min(x, y), Infinity);
  return isNaN(result) ? result = 0 : result;
}