function solution(k, arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length - k; i++) {
    let times = k;
    let sum = 0;
    // 이렇게 하면 times 만큼 돌아야.. 슬라이딩 윈도우 방법 쓰기!
    while (times > 0) {
      sum += arr[i + times - 1]; // times = 3, 2, 1
      times--;
    }
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
