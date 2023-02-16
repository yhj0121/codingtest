#combination(조합)
#원소의 개수가 1개인 4c1
from itertools import combinations
N,S = map(int,(input().split()))
answer = 0
range = list(map(int, input('숫자를 입력하세요: ').split()))

for i in range(1,N+1):
    for c in list(combinations(range,i)):
        if sum(c) ==S:
            answer+=1
print(answer)