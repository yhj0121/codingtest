function solution(n) {
  let arr = n.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      console.log(arr[i] + arr[i + 1] + arr[i + 2]);
      return arr[i] + arr[i + 1] + arr[i + 2];
    }
  }
}

solution([5, 4, 5, 6, 7, 20]);
