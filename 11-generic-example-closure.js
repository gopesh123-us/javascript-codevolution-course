function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function memoizedGeneric(callback) {
  //This is important to have an empty object to use it as a cache
  const cache = {};
  return function inner(...arg) {
    const key = arg.toString();
    if (key in cache) {
      console.log("Returning from cache");
      return cache[key];
    } else {
      console.log("Computing results");
      const results = callback(...arg);
      cache[key] = results;
      return results;
    }
  };
}

const memoziedAdd = memoizedGeneric(add);
const memoziedMultiply = memoizedGeneric(multiply);
console.log(memoziedAdd(2, 3));
console.log(memoziedAdd(2, 3));
console.log(memoziedAdd(12, 3));
console.log(memoziedAdd(12, 3));

console.log(memoziedMultiply(8, 9));
console.log(memoziedMultiply(8, 9));
console.log(memoziedMultiply(8, 9));
console.log(memoziedMultiply(18, 18));
console.log(memoziedMultiply(18, 18));
