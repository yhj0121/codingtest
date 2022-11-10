n, m = map(int, input('숫자를 입력하세요: ').split())
result = 0
#무한 반복
while True:
    target = (n // m) * m
    print(target, "target")
    result += (n - target)
    print(result, "result")

    n = target
    if n < m:
        break
    result += 1

    n //= m

result += (n - 1)
print(result)
