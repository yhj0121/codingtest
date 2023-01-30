function solution(n) {
  var answer = 0;

  console.log(
    [...("" + n)].map((num) => {
      console.log(+num);
    })
  );
  const le = ["1", "2", "3"];
  console.log(+le[1]);

  return answer;
}

solution(123);
