//people엔 사람의 몸무게,limit은 구명보트의 무게 제한
//구명보트는 최대 두명에서 같이탈수잇음(limit안넘기면)
//구명보트 최소값을 리턴한다
//일단 체중별로 정렬(내림차순,오름차순)
//가장 작은 두개를 더해서 limit이면 구명보트 추가 배열 값을 뺴주기?
function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => b-a)
    let length = people.length-1;
    let i =0;

    while(i<length)
    {
        var sum = people[i]+people[length]
        if(sum>limit){
        	i++
        } else {
        	i++
            length--
        }
        answer++;
    }
    if(i == length) answer++;
    return answer;

    
}

console.log(solution([70, 50, 80, 50],100))