function solution(s) {
  s = s.replace(/[^0-9]/g, "");

  return parseInt(s);
}

console.log(solution("0123hfe2"));
