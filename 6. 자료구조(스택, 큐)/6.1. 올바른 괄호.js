function solution(s) {
  let answer = "YES";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      if (!stack.length) return "NO";
      stack.pop();
    }
  }
  if (stack.length) answer = "NO";
  return answer;
}

let a = "(()(()))(()";
let b = "))((";
let c = "(())()";
console.log(solution(a));
console.log(solution(b));
console.log(solution(c));
