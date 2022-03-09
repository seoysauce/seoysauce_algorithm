function solution(n, k, card) {
  let answer;
  let threeCardSum = [];
  card.sort((a, b) => b - a); // 내림차순 정렬
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let l = j + 1; l < n; l++) {
        threeCardSum.push(card[l] + card[j] + card[i]);
      }
    }
  }
  let unique = new Set(threeCardSum);
  answer = [...unique][k - 1];
  return answer;
}

let arr = [13, 13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(10, 3, arr));
