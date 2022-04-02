function solution(s) {
  let answer = "";
  let stack = [];
  // 괄호 짝이 안맞게 나온다면 틀린 풀이.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else if (s[i] === ")") {
      if (stack.length) stack.pop();
    } else {
      if (!stack.length) answer += s[i];
    }
  }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
let str2 = ")(CD)()(SDF)ASD())(";
let str3 = "KKK)LM(N)";
let str4 = "KKK(LM";
console.log(solution(str));
console.log(solution(str2));
console.log(solution(str3));
console.log(solution(str4));
