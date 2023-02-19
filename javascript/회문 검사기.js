function solution(s) {
  s.toLowerCase(s);
  length = s.length;

  // for (let i = 0; i < Math.floor(length / 2); i++) {
  //   if (s[i] !== s[length - i - 1]) return false;
  // }
  // return true;

  if (s.split("").reverse().join("") == s) return "true";
  else return "no";
}
