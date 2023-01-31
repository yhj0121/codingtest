function solution(nums) {
  var answer = 0;
  let count = [];
  nums.forEach((element) => {
    if (!count.includes(element)) {
      count.push(element);
    }
  });
  count.length >= nums.length / 2
    ? (answer = nums.length / 2)
    : (answer = count.length);
  console.log(answer);
  return answer;
}

solution([3, 1, 2, 3]);
