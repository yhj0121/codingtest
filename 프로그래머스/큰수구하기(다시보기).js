//수를 k개 제거 한다
//제거할때 최대값을 찾아야한다
//1924 같은경우는 1,2,9,4 깉은 경우는 9 4
// 숫자를 옮기면 안된다 
//k수를 제거했을때의 값을 배열에 담는다?
function solution(number, k) {
   const stack = [];
   console.log(number[1])
   for(let i=0; i<number.length; i++)
   {
        const tempNum = number[i];

        while(k>0 &&stack[stack.length-1]<tempNum)
        {
            console.log(stack)
            stack.pop();
            k--;
        }
        stack.push(tempNum)
   }
//    console.log(stack.splice(stack.length-k,k))
}

solution("4177252841"	,4)