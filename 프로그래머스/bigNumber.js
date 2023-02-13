//수를 k개 제거 한다
//제거할때 최대값을 찾아야한다
//1924 같은경우는 1,2,9,4 깉은 경우는 9 4
// 숫자를 옮기면 안된다
//k수를 제거했을때의 값을 배열에 담는다?
function solution(number, k) {
  const storage = []; //값들을 넣을곳
  for (let i = 0; i < number.length; i++) {
    const tempNum = number[i];

    //값을 비교하는거 3 1에서 4가 들어간경우 4 1 비교 1 pop 그다음 3하고 비교 3 빼기
    while ( k> 0 && storage[storage.length - 1] < tempNum) {
      storage.pop();
      k--;
    }
    storage.push(tempNum); //while문 만족하는 값 넣어주기
  }
    storage.splice(number.length - k, k); //똑같은값일때 

  return storage.join("");
}

console.log(solution("777777", 2));
