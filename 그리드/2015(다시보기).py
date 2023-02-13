#누적합을 이루기 위함
# index 0  1  2  3  4  5  6  7  8
# array 1  2 -1 -1  2 -1 -2  3  1
# psum  1  3  2  1  3  2  0  3  4   

# index 0에서 끝나는 구간에서 합이 2인 구간이 있는지  [?,0] =0개
# [?,1]:psum[1]-psum[?-1] = 2 ?가 1이면 조건 만족이니 1개
# [?:2]:psum[2]-psum[?-1] =2 psum이 0인경우에는
n,m = map(int, input('숫자를 입력하세요: ').split())
h= list(map(int, input('숫자를 입력하세요: ').split()))

psum = [0]*n
psum[0] = h[0]

#누적합
for i in range(1,n):
    psum[i]=psum[i-1] +h[i]

count = {} #dictionary count[key]=내 앞에 psum값이 key인 것의 갯수
answer = 0

for i in range(n):
    goal = psum[i]-m #psum[1]-psum[?-1] = 2

    if goal in count:
        answer += count[goal]
    if goal ==0:
        anaswer += 1

    if psum[i] not in count:
        count[psum[i]] =0
        count[psum[i]] +=1

print(answer)   

#아마 딕셔너리를 통한 값 체크방식을 다시알아야할듯