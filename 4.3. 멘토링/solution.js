function solution(test) {
  let answer = 0;

  let n = test[0].length;
  let m = test.length;
  // 중복 X 조합
  for (let i = 0; i < n; i++) {
    // (0,1) (0,2) (0,3) (1,2) ... (i, j)
    for (let j = i + 1; j < n; j++) {
      let count = 0;
      let pi = 0;
      let pj = 0;
      // i, j의 등수 (index + 1)
      for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
          if (test[x][y] === i + 1) pi = y;
          if (test[x][y] === j + 1) pj = y;
        }
        if (pi < pj) count += 1;
        if (pi > pj) count -= 1;
      }
      if (count === m || count === m * -1) answer += 1;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
