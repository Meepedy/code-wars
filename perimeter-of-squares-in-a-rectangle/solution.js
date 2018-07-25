function perimeter(n) {
  let squares = n + 1
  let fib = [0, 1];
  
  for(let i = 2; i <= squares; i++){
    fib.push(fib[i-2] + fib[i-1]);
  }
  
  return fib.reduce((x, y) => x + y, 0) * 4;
  
}