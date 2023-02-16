function solution(s) {
  let arr = Array.from({ length: s.length }, () => 1);
  for (let i = 0; i < s.length; i++) {
    for (let k = 0; i < s.length; k++) {
      if (s[i] < s[k]) {
        arr[i]++;
      }
    }
  }
  return arr;
}

console.log(solution([87, 89, 92, 100, 76]));
