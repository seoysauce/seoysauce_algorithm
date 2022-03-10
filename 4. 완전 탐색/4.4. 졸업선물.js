function solution(m, product) {
  let answer = 0;
  // m : 예산, product: [상품 가격, 배송비]
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 합산 오름차순 정렬 [2,2], [4,3], ...
  console.log(product);
  for (let i = 0; i < product.length; i++) {
    let cnt = 0;
    let total = 0;
    for (let j = 0; j < product.length; j++) {
      let [price, shipping] = product[j];
      let tempTotal = 0;
      if (i === j) tempTotal += price / 2 + shipping;
      else tempTotal += price + shipping;
      if (tempTotal + total <= m) {
        cnt++;
        total += tempTotal;
      }
    }
    if (answer < cnt) answer = cnt;
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
