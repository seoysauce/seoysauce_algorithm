function solution(str1, str2) {
  let countObj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!countObj[str1[i]]) countObj[str1[i]] = 1;
    else countObj[str1[i]]++;
  }
  for (let i = 0; i < str2.length; i++) {
    // 아예 새로운 문자가 있는 경우
    if (!countObj[str2[i]]) return "NO";
    else countObj[str2[i]]--;
  }
  // console.log(countObj);
  if (Object.values(countObj).filter((value) => value !== 0).length)
    return "NO";
  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));

let c = "abaCC";
let d = "Caab";
console.log(solution(c, d));
