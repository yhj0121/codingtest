# 부분합  a =    [1,3,2,6,2]
# psum(부분합) = [1,4,6,12,14]
n,m = map(int, input('숫자를 입력하세요: ').split())
range = list(map(int, input('숫자를 입력하세요: ').split()))
answer = 1
psum =  [0] *n 
psum[0] = range[0]
for i in range(1,n):
  psum[i]= psum[i-1]+range[i]

for _ in range(m):
  a,b = map(int, input('숫자를 입력하세요: ').split())
  if a ==1:
    answer = psum[b-1]