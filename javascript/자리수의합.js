function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let v of arr) {
    v.toString()
      .split("")
      .forEach((e) => {
        sum += parseInt(e, 10);
        if (max < sum) {
          max = sum;
          answer = v;
        } else if (max === sum) v > answer && (answer = v);
      });
    sum = 0;
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
let arr2 = [235, 460, 603, 1234, 521];
console.log(solution(arr));
console.log(solution(arr2));
