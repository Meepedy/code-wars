function high(x){
  const words = x
    .split(" ");
    
  const scores = words
    .map(x => x
    .split('')
    .reduce((x, y) => x + y.codePointAt()-96, 0));
      
  const result = scores.indexOf(Math.max(...scores));
      
  return words[result];
}