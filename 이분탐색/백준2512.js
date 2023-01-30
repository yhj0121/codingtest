function budgetCount(provinces,budgets,totalBudget)
{
    let MaxBudget = Math.max.apply(null,budgets)
    let minBudget = 0;
    let answer= 0;

    while (minBudget <=MaxBudget)
    {
      let midBudget = (minBudget+MaxBudget)/2;
      let total = 0;

      for(let i in budgets) {
        total+=Math.min(midBudget,budgets[i]) //총값을 구하기 위함
      }
        if(total>totalBudget)
        {
            MaxBudget = midBudget-1;
        } else {
            minBudget+1;
            answer = max(answer,mid);
        }


    }

}