function solution(s) {
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") == s) return "true";
  else return "no";
}
