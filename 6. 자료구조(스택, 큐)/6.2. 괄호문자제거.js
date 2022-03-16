function solution(s) {
  let answer = "";
  let stack = [];

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
console.log(solution(str2));
