# 이차원 누적합을 구하자 
n,m = map(int, input('숫자를 입력하세요: ').split())
a = []
for i in range(n):
    a.append(list(map(int,input().split)))

psum = [0 for _ in range(m)]