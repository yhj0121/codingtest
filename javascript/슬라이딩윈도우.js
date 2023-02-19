function solution(k, s) {
  let answer,
    max = 0;
  for (let i = 0; i < k; i++) max += s[i];
  answer = max;
  for (let j = k; k < s.length; k++) {
    max += s[j] + s[j - k];
    answer = Math.max(max, answer);
  }
  return answer;
}
