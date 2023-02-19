#길의 n인 수열 n!
#무식하게 모든 가능한 경우를 전부 시뮬레이션 하기 => 브루스포스
#모든 수열에 대하여 차이의 합을 구해보기
#python에는 pemitation 내장함수 있음
from itertools import permutations
N = int(input())
range = list(map(int, input('숫자를 입력하세요: ').split()))
ans = -1
#3 6 7  // 3 7 6 이 될수도 있음 
for p in list(list(permutations(range))):
    sum = 0
    for i in range(N-1):
        sum+= abs(p[i]-p[i+1]) #절대값함수
    
    if ans < sum:
        ans = sum
print(sum)