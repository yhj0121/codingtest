//h는 논문 인용 횟수를 체크

function solution(citations) {

    citations.sort((a, b) => b - a); 

  
    let result = 0;
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
            result++;
        }
    }

    return result;
}

console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));