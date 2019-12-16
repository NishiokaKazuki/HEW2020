INSERT INTO app_users(name, sex, age, sign_id, sign_pw, disabled) VALUES
    ('じゅんじゅん', 1, 20, "junjun", "secret", 0),
    ('えいぽん', 1, 19, "eipon", "secret", 0),
    ('なっかー', 1, 20, "nakkar", "secret", 1),
    ('ぶでぃ', 1, 24, "debu", "secret", 1),
    ('おかぽん', 1, 20, "okapon", "secret", 0),
    ('かなみん', 2, 20, "kanamin", "secret", 0),
    ('おやかた', 2, 20, "oyakata", "secret", 1);

INSERT INTO stores(image, address, company, disabled) VALUES
    ('image1', '滋賀県彦根市', 1, 0),
    ('image2', '岐阜県恵那市', 2, 0),
    ('image3', '大阪府堺市', 3, 1),
    ('image4', '北極しろくま市', 4, 0);

INSERT INTO companies(name, disabled) VALUES
    ('セブンイレブン', 0),
    ('ローソン', 1),
    ('ファミリーマート', 0),
    ('HAL大阪', 0);

INSERT INTO products(name, image, price, type, disabled) VALUES
    ('コーラ', 'image1', 150, 1, 0),
    ('あやたか', 'image2', 130, 1, 1),
    ('ポテチ', 'image3', 100, 2, 0),
    ('おにぎり', 'image4', 1000, 2, 0);

INSERT INTO rfid_tags(product_id, rfid_code, sold) VALUES
    (1, 'ABCDEFG', 0),
    (2, 'HIJKLMN', 0),
    (3, 'OPQRSTU', 0),
    (4, 'VWXYZ12', 0),
    (3, '3456789', 1);

INSERT INTO product_stocks(store_id, product_id, stock) VALUES
    (1, 2, 10),
    (2, 4, 5),
    (3, 1, 3),
    (1, 4, 0),
    (4, 3, 30);

INSERT INTO bought_products(user_id, product_id, date) VALUES
    (1, 2, '2019-11-24'),
    (1, 4, '2019-11-24'),
    (1, 1, '2019-11-24'),
    (1, 4, '2019-11-24'),
    (1, 3, '2019-12-25'),
    (1, 1, '2019-12-25'),
    (1, 1, '2019-12-25'),
    (1, 2, '2019-12-25'),
    (2, 3, '2019-12-31'),
    (2, 2, '2019-12-31'),
    (7, 4, '2019-12-25'),
    (7, 4, '2019-12-25'),
    (7, 4, '2019-12-25'),
    (7, 4, '2019-12-25'),
    (7, 4, '2019-12-25'),
    (7, 4, '2019-12-25');

INSERT INTO face_ids(user_id, image) VALUES
    (1, 'test1'),
    (2, 'test2'),
    (3, 'test3'),
    (4, 'test4'),
    (5, 'test5'),
    (6, 'test6'),
    (7, 'test7');