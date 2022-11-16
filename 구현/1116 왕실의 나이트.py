a = input()
step = [(-2,-1),(-2,1),(2,1),(2,-1),(1,-2),(1,2),(-1,2),(-1,-2)] #조건식
row = int(a[1])
column = int(ord(a[0]))-int(ord('a'))+ 1 #유니코드로 좌표 구하기
result = 0
for i in step:
  row_step = row + i[0]
  column_step = column + i[1]

  if row_step<=8 and  row_step>=1 and column_step<=8 and column_step>=1:
    result+=1

print(result)

