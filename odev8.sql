-- 1. Adım: employee tablosunu oluşturma
-- Tablo, id, name, birthday ve email sütunlarından oluşur.
CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    birthday DATE,
    email VARCHAR(100)
);

-- 2. Adım: Mockaroo'dan oluşturulan 50 adet veriyi ekleme
-- Mockaroo'dan export edilen CSV dosyası kullanılarak veriler eklenir.
-- Örnek: /path/to/mock_data.csv dosyası kullanılır.
COPY employee(id, name, birthday, email)
FROM '/path/to/mock_data.csv'
DELIMITER ',' CSV HEADER;

-- 3. Adım: UPDATE işlemleri
-- Sütunlara göre diğer sütunları güncelleyen 5 adet UPDATE işlemi.

-- İsim sütununa göre email güncelleme
UPDATE employee SET email = 'newemail@example.com' WHERE name = 'John Doe';

-- Doğum tarihine göre isim güncelleme
UPDATE employee SET name = 'Jane Doe' WHERE birthday = '1990-01-01';

-- Email sütununa göre doğum tarihi güncelleme
UPDATE employee SET birthday = '1985-05-15' WHERE email = 'oldemail@example.com';

-- ID sütununa göre isim güncelleme
UPDATE employee SET name = 'Alice Wonderland' WHERE id = 10;

-- İsim ve doğum tarihine göre email güncelleme
UPDATE employee SET email = 'alice@example.com' WHERE name = 'Alice' AND birthday = '1992-03-22';

-- 4. Adım: DELETE işlemleri
-- Sütunlara göre ilgili satırları silen 5 adet DELETE işlemi.

-- İsim sütununa göre silme
DELETE FROM employee WHERE name = 'John Doe';

-- Doğum tarihine göre silme
DELETE FROM employee WHERE birthday = '1990-01-01';

-- Email sütununa göre silme
DELETE FROM employee WHERE email = 'oldemail@example.com';

-- ID sütununa göre silme
DELETE FROM employee WHERE id = 10;

-- İsim ve doğum tarihine göre silme
DELETE FROM employee WHERE name = 'Alice' AND birthday = '1992-03-22';
