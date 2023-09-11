-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
SET @uid = 1;
-- 
-- 特定使用者id，取得有加入書籤的為'true'字串，否則為'false'
--
SELECT p.*, IF(f.id, 'true', 'false') AS is_favorite
    FROM product AS p
    LEFT JOIN fav AS f ON f.isbn = p.isbn
    AND f.uid = @uid
    ORDER BY p.isbn ASC;
-- 新增
-- uid為使用者id變數，會員登入後可以得到。pid是商品的id變數，需要代入查詢
SET @uid = 1;
SET @isbn = 3;
-- 
INSERT INTO fav (uid, isbn)
VALUES (@uid, @isbn);
--
-- 刪除
-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
--
SET @uid = 1;
SET @isbn = 3;
-- 
DELETE FROM fav
WHERE isbn=@isbn AND uid=@uid;