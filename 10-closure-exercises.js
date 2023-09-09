function calsquare(num) {
  return num * num;
}

function memoizedSquare() {
  const cache = {};
  return function optimizedSquare(num) {
    if (num in cache) {
      console.log("Returning from cache");
      return cache[num];
    } else {
      console.log("Computing square");
      const result = calsquare(num);
      cache[num] = result;
      return result;
    }
  };
}

const fn = memoizedSquare();
console.log(fn(10));
console.log(fn(9));
console.log(fn(100));
console.log(fn(9));
