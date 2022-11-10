n, m = map(int, input('숫자를 입력하세요: ').split())

minScore = 0

for i in range(n):
    hangList = list(map(int, input("행의 숫자를 입력하세요:").split()))
    minScore = max(minScore, min(hangList))


print(minScore)