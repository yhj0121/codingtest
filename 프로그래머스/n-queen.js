function solution(n) {
  const arr = new Array(n).fill(0); // [empty x 2]

  for (var i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(0);
  }

  return arr;
}

console.log(solution(5));
