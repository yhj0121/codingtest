function solution(citations) {
    citations.sort((a, b) => b - a)
    .filter((el, idx) => el >= idx + 1).length;  
}

console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));