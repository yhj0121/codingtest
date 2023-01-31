/* */
n= map(int, input('숫자를 입력하세요: ').split())
k = int(input())

def get_num(x: int) -> int:
    num_smaller =0
    for i in range(1,n+1):
    #i 번쨰에 행에서 x보다 작은 수의 개수는 min(n,(x-1) //i)개
        num_smaller +=min(n,(x-1) //i)
    #i 행은 i 2i 3i ni형식 

def get_num_bigger(x:int) => int:
    num_bigger = 0
    for k in range(1,n+1):
        num_bigger += n -min(n,(x-1) //i)