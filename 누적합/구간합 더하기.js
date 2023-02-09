function solution(s, a, b) {
  let newArr = [];
  let answer = -1;
  let i = 1;
  newArr.push(s[0]);

  for (i of s) {
    newArr[i] = newArr[i - 1] + s[i];
  }

  a == 0 ? (answer = newArr[b - 1]) : (answer = newArr[b - 1] - newArr[a - 2]);
}
