#하루에 한그루 짜를수 밖에 없음
#자라는 속도가 적은거 부터 짜르면 최대의 양을 구할수 있음
#여러번 짜르는거보다 한번만 짜르는게 이득
#n일동안 n그루의 나무를 자른다. 모든 나무를 다 한번씩 자른다
#나무를 자를 순서를 정하는 문제
N = int(input())
h= list(map(int, input('숫자를 입력하세요: ').split()))
a = list(map(int, input('숫자를 입력하세요: ').split()))
I = list(range(N))

I = sorted(I,key=lambda i: A[i]) #i로 최소값의 인덱스를 구한다

answer = 0
for i in range(N):
  index = I[N]
  answer += h[index]+ i*a[index]

  print(answer)