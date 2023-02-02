SELECT ANIMAL_TYPE,IFNULL(NAME,"NO Name")AS Name,SEX_UPON_INTAKE
FROM ANIMAL_INS

/*ifnull을 사용하면 null값에 대체할 데이터를 넣을수가 있다.*/