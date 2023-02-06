def f(a,b,c):
  # 평균*3 = a+b+C
  # 중앙값*3 = 3 *b
  return abs(a+b+c-3*b)

N = int(input())
A = [int(input()) for _ in range(N)]

answer = -1
for i in range(1,N-1):
  answer = max(answer,f(A[i-1],A[i],A[N-1]))
  answer = max(answer,f(A[0],A[i],A[i+1]))

print(answer)