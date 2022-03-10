function solution(s) {
  let answer;
  let result = {};

  for (let i = 0; i < s.length; i++) {
    if (!result[s[i]]) result[s[i]] = 0;
    result[s[i]]++;
  }
  answer = Object.keys(result).find(
    (key) => result[key] === Math.max(...Object.values(result))
  );
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
