function solution(str1, str2) {
  let answer = "YES";
  let countObj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!countObj[str1[i]]) countObj[str1[i]] = 1;
    else countObj[str1[i]]++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!countObj[str2[i]]) return "NO";
    // 아예 새로운 문자가 있는 경우
    else countObj[str2[i]]--;
  }
  if (Object.v) console.log(countObj);

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
