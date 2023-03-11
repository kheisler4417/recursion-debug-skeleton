/***********************************************************************
We've done most of the work for you below, but something's not quite
right. Refactor the problem below to avoid a stack overflow and save
the day!

When fixed, this function should behave similarly to JavaScript's '.map()'
function.

Examples:

doForAll([], (x) => x * 2); // => []
doForAll([1, 2, 3], (x) => x + 1); // => [2, 3, 4]
doForAll(["a", "b", "c"]), (x) => x.toUpperCase()); // => ["A", "B", "C"]
***********************************************************************/

// function doForAll(arr, action) {
//   return [action(arr[0]), ...doForAll(arr.slice(1), action)];
// }

function doForAll(arr, action, result = []) {
  if (arr.length === 0) {
    return result;
  }
  const newResult = [...result, action(arr[0])];
  return doForAll(arr.slice(1), action, newResult);
}


// function doForAll(arr, action) {
//   if (arr.length === 0) {
//     return [];
//   } else {
//     const result = doForAll(arr.slice(1), action);
//     result.unshift(action(arr[0]));
//     return result;
//   }
// }


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = doForAll;
