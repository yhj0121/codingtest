SELECT 
        b.BOOK_ID as BOOK_ID ,
        a.AUTHOR_NAME as AUTHOR_NAME,
        DATE_FORMAT(b.PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
FROM BOOK b
inner JOIN AUTHOR a ON b.AUTHOR_ID = A.AUTHOR_ID
    WHERE b.CATEGORY = '경제'
ORDER BY b.PUBLISHED_DATE ASC;