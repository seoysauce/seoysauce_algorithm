function solution(s, t) {
  let answer = 0;
  let substrObj = {};
  let copiedObj = {};

  for (let i = 0; i < t.length; i++) {
    if (!substrObj[s[i]]) substrObj[s[i]] = 1;
    else substrObj[s[i]]++;
  }
  // console.log(substrObj);
  copiedObj = JSON.parse(JSON.stringify(substrObj));
  // console.log(copiedObj);

  for (let i = 0; i < s.length - t.length + 1; i++) {
    copiedObj = JSON.parse(JSON.stringify(substrObj));
    for (let j = i; j < i + t.length; j++) {
      // 0, 1, 2
      // console.log("s[j]", s[j]);
      if (copiedObj[s[j]]) copiedObj[s[j]]--;
      else {
        break;
      }
    }
    // console.log("copiedObj", copiedObj);
    if (
      Object.values(copiedObj).filter((value) => value === 0).length ===
      Object.values(substrObj).length
    )
      answer++;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

let c = "aaabbbccc";
let d = "bbb";
console.log(solution(c, d));

let e = "abababab";
let f = "aba";
console.log(solution(e, f));
