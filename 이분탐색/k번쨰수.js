let n=5;
let k=17;

function solution(n,k)
{
    let left = 1; right = n * n;
    let result = 0;

    while(left <= right) {
        const mid = parseInt((left + right) / 2);
        let cnt = 0;

        for(let i = 1; i <= n; i++) {
            cnt += Math.min(n, parseInt(mid / i));
        }
        
        if(cnt >= k) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;            
        }
    }
    console.log(result);
}

solution(n,k)