function solution(v)
{   //전위 
    let answer;

    function dfs(v)
    {
        if(v>7){
            return;
        }
        else {
            dfs(v*2)
            dfs(v*2+1)
                                    console.log(v)

        }
    }
    dfs(1)
    return answer;
}

solution(7)