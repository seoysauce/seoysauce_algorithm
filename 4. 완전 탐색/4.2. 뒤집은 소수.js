function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];

  for (let element of arr) {
    let reversed = element.toString().split("").reverse(); // ['2', '3']
    while (reversed[0] === "0") {
      // 맨앞에 0이 안나올 때까지 shift
      reversed.shift();
    }
    let reversedNum = Number(reversed.join(""));
    if (isPrime(reversedNum)) {
      answer.push(reversedNum);
    }
    console.log(reversedNum);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
