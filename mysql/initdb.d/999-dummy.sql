DELETE FROM app_users;

INSERT INTO app_users(name, sex, age, sign_id, sign_pw, disabled) VALUES
    ('じゅんじゅん', 1, 20, "junjun", "secret", false),
    ('えいぽん', 1, 19, "eipon", "secret", false),
    ('なっかー', 1, 20, "nakkar", "secret", true),
    ('ぶでぃ', 1, 24, "debu", "secret", true),
    ('おかぽん', 1, 20, "okapon", "secret", false),
    ('かなみん', 2, 20, "kanamin", "secret", false),
    ('おやかた', 2, 20, "oyakata", "secret", true);

DELETE FROM companies;

INSERT INTO companies(name, disabled) VALUES
    ('セブンイレブン', 0),
    ('ローソン', 1),
    ('ファミリーマート', 0),
    ('HAL大阪', 0);

DELETE FROM stores;

INSERT INTO stores(company_id, image, address, disabled) VALUES
    (4, 'image1', '大阪府大阪市', 0),
    (2, 'image2', '岐阜県恵那市', 0),
    (3, 'image3', '大阪府堺市', 1),
    (4, 'image4', '北極しろくま市', 0),
    (1, 'image5', '滋賀県彦根市', 0);

DELETE FROM products;

INSERT INTO products(name, image, price, type, disabled) VALUES
    ('コーラ', 'image1', 150, 1, 0),
    ('あやたか', 'image2', 130, 1, 0),
    ('ポテチ', 'image3', 100, 2, 0),
    ('おにぎり', 'image4', 1000, 2, 0);

DELETE FROM rfid_tags;

INSERT INTO rfid_tags(product_id, rfid_code, sold) VALUES
    (1, '0003839724', 0),
    (1, '0005841988', 0),
    (2, '0013275377', 0),
    (2, '0005897287', 0),
    (1, 'ABCDEFG', 0),
    (2, 'HIJKLMN', 0),
    (3, 'OPQRSTU', 0),
    (4, 'VWXYZ12', 0),
    (3, '3456789', 0),
    (1, '1111111', 0),
    (1, '1111112', 0),
    (1, '1111113', 0),
    (1, '1111114', 0),
    (1, '1111115', 0),
    (1, '1111116', 0),
    (1, '1111117', 0),
    (1, '1111118', 0),
    (1, '1111119', 0),
    (2, '2222221', 0),
    (2, '2222222', 0),
    (2, '2222223', 0),
    (2, '2222224', 0),
    (2, '2222225', 0),
    (2, '2222226', 0),
    (2, '2222227', 0),
    (2, '2222228', 0),
    (2, '2222229', 0),
    (3, '3333331', 0),
    (3, '3333332', 0),
    (3, '3333333', 0),
    (3, '3333334', 0),
    (3, '3333335', 0),
    (3, '3333336', 0),
    (3, '3333337', 0),
    (3, '3333338', 0),
    (3, '3333339', 0),
    (4, '4444441', 0),
    (4, '4444442', 0),
    (4, '4444443', 0),
    (4, '4444444', 0),
    (4, '4444445', 0),
    (4, '4444446', 0),
    (4, '4444447', 0),
    (4, '4444448', 0),
    (4, '4444449', 0);

DELETE FROM product_stocks;

INSERT INTO product_stocks(store_id, product_id, stock) VALUES
    (1, 2, 10),
    (2, 4, 5),
    (3, 1, 3),
    (1, 4, 0),
    (4, 3, 30);

DELETE FROM bought_products;

INSERT INTO bought_products(user_id, product_id, store_id) VALUES
    (1, 2, 1),
    (1, 4, 2),
    (1, 1, 2),
    (1, 4, 3),
    (1, 3, 3),
    (1, 1, 3),
    (1, 1, 4),
    (1, 2, 4),
    (2, 3, 3),
    (2, 2, 3),
    (7, 4, 4),
    (7, 4, 4),
    (7, 4, 4),
    (7, 4, 4),
    (7, 4, 2),
    (7, 4, 2);

DELETE FROM tokens;

INSERT INTO tokens(user_id, token)VALUES
    (1,'test');