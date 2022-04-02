function getCombinations(arr, selectNum) {
  const result = [];

  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function solution(arr) {
  //nC3
  let count = 0;
  let primeArr = [];

  // 1. 모든 조합 담긴 배열 구하기
  const resultArr = getCombinations(arr, 3);
  // 2. 합이 소수인 배열 개수 찾기
  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i].reduce((acc, curr) => acc + curr);
    if (isPrime(resultArr[i])) {
      primeArr.push(resultArr[i]);
      count++;
    }
  }
  console.log("resultArr", primeArr);
  return count;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
console.log(solution([1, 2, 3])); // 0
console.log(solution([1, 2, 3, 4, 5])); // 2
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 37
