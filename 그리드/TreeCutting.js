function solution(initialValue, increaseValue) {
  let answer = 0;
  let CopyedincreaseValue = increaseValue;
  let indexNum = [];

  while (0 < CopyedincreaseValue.value) {
    console.log(1);
    let num = CopyedincreaseValue.indexOf(Math.min(...CopyedincreaseValue));

    indexNum.push(num);
    CopyedincreaseValue.splice(
      CopyedincreaseValue.indexOf(Math.min(...CopyedincreaseValue))
    );
  }

  indexNum.forEach((num, index) => {
    answer += initialValue[num] + index * increaseValue[num];
  });

  console.log(indexNum);
  return answer;
}

solution([1, 3, 2, 4, 6], [2, 7, 3, 4, 1]);
