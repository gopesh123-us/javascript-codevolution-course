function add(a, b) {
  return a + b;
}

function memoizedGeneric(callback) {
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
console.log(memoziedAdd(2, 3));
console.log(memoziedAdd(2, 3));
console.log(memoziedAdd(12, 3));
console.log(memoziedAdd(12, 3));
