function solution(n) {
    let answer = 0;
    const arr = new Array(n+1).fill(true); // 초깃값 설정
    const end = Math.sqrt(n) 
    
    for(let i = 2; i <= end; ++i){
        // 이미 소수가 아닌 인덱스는 건너뛴다.
        if(arr[i] === false){
            continue; 
        }
        // 소수가 아닌 데이터는 false로 입력한다.
        for(let k = i * i; k <= n; k += i){
            arr[k] = false;
        }
    }
    // 소수의 갯수를 구한다.
    for(let i = 2; i <= n; ++i){
        if(arr[i] === true){
            answer++;
        }
    }
    return answer;
}


console.log(solution(16))
console.log([1,2,3].splice(0,1))