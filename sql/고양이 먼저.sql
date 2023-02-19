SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE)
FROM ANIMAL_INS
group by ANIMAL_TYPE
order by ANIMAL_TYPE ASC

/*
SELECT - 5순위 (필수)

FROM - 1순위 (필수)

WHERE - 2순위

GROUP BY - 3순위

HAVING - 4순위

ORDER BY - 6순위

*/