function solution(m, arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > m) break;
      else if (sum === m) {
        count++;
        break;
      }
    }
  }

  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
