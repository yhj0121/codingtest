function solution(x) {
  let i = x
    .toString()
    .split("")
    .map((num) => +num)
    .reduce((a, c) => a + c);

  console.log(i);
  x % i === 0 ? (answer = true) : (answer = false);
  return answer;
}

solution(15);
