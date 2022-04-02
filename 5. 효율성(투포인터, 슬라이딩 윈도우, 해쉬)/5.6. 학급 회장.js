function solution(s) {
  let answer;
  let result = {};

  for (let i = 0; i < s.length; i++) {
    if (!result[s[i]]) result[s[i]] = 0;
    result[s[i]]++;
  }
  // N^2 효율성.. max를 따로 빼주는 게 낫다.
  answer = Object.keys(result).find(
    // [B,A,C,D,E]
    (key) => result[key] === Math.max(...Object.values(result))
  );
  return answer;
}

let str = "BACBACCACCBDEDE";
let str2 = "AAAAAABBBBBBBBBB";
console.log(solution(str2));
