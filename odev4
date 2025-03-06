-- 1. Sorgu: film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
SELECT DISTINCT replacement_cost
FROM film;

-- 2. Sorgu: film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
SELECT COUNT(DISTINCT replacement_cost) AS unique_replacement_cost_count
FROM film;

-- 3. Sorgu: film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
SELECT COUNT(*) AS title_starts_with_T_and_rating_G
FROM film
WHERE title LIKE 'T%' AND rating = 'G';

-- 4. Sorgu: country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
SELECT COUNT(*) AS country_name_length_5
FROM country
WHERE LENGTH(country) = 5;

-- 5. Sorgu: city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?
SELECT COUNT(*) AS city_ends_with_R_or_r
FROM city
WHERE city LIKE '%R' OR city LIKE '%r';
