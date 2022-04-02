function solution(arr) {
  let xStack = [];
  let yStack = [];
  const n = arr.length;

  // x끼리, y끼리 짝이 맞아야 (x, y)
  arr.forEach((element) => {
    // x
    let xIndex = xStack.indexOf(element[0]);
    if (xIndex !== -1) xStack.splice(xIndex, 1);
    else xStack.push(element[0]);
    // y
    let yIndex = yStack.indexOf(element[1]);
    if (yIndex !== -1) yStack.splice(yIndex, 1);
    else yStack.push(element[1]);

    console.log(`xStack = ${xStack}, yStack = ${yStack}`);
  });
  return [xStack[0], yStack[0]];
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
); // [1,10]
console.log(
  solution([
    [1, 1],
    [2, 2],
    [1, 2],
  ])
); // [2, 1]

console.log(
  solution([
    [3, 2],
    [3, 9],
    [7, 2],
  ])
); // [7,9]
