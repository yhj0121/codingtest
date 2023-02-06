function solution(s) {
  const average = s.sort((a, b) => a - b);
  let answer = 0;
  average.forEach((value, index) => {
    let Maxsum =
      average[index] +
      average[index + 1] +
      average[average.length - 1] -
      3 * average[index + 1];
    let minSum =
      average[0] + average[index] + average[index + 1] - 3 * average[index + 1];
    answer = Math.max(answer, Math.abs(Maxsum));
    answer = Math.max(answer, Math.abs(minSum));
    console.log(answer);
  });
  return answer;
}

console.log(solution([100, 234, 430, 120, 489]));
