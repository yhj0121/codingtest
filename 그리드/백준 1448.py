n = map(int, input('숫자를 입력하세요: ').split())

n.sort()

answer =-1

for i in range(len(n),1,-1):
  if n[i]<n[i-1]+n[i-2]:
    answer = n[i]+n[i-1]+n[i-2] 
    break

print(answer)