INSERT INTO app_users(name, sex, age, sign_id, sign_pw, disabled) VALUES
    ('じゅんじゅん', 1, 20, "junjun", "secret", false),
    ('えいぽん', 1, 19, "eipon", "secret", false),
    ('なっかー', 1, 20, "nakkar", "secret", true),
    ('ぶでぃ', 1, 24, "debu", "secret", true),
    ('おかぽん', 1, 20, "okapon", "secret", false),
    ('かなみん', 2, 20, "kanamin", "secret", false),
    ('おやかた', 2, 20, "oyakata", "secret", true);

INSERT INTO companies(name, disabled) VALUES
    ('セブンイレブン', 0),
    ('ローソン', 1),
    ('ファミリーマート', 0),
    ('HAL大阪', 0);

INSERT INTO stores(company_id, image, address, disabled) VALUES
    (1, 'image1', '滋賀県彦根市', 0),
    (2, 'image2', '岐阜県恵那市', 0),
    (3, 'image3', '大阪府堺市', 1),
    (4, 'image4', '北極しろくま市', 0);

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

INSERT INTO bought_products(user_id, product_id) VALUES
    (1, 2),
    (1, 4),
    (1, 1),
    (1, 4),
    (1, 3),
    (1, 1),
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 2),
    (7, 4),
    (7, 4),
    (7, 4),
    (7, 4),
    (7, 4),
    (7, 4);

INSERT INTO face_ids(user_id, image) VALUES
    (1, 'test1'),
    (2, 'test2'),
    (3, 'test3'),
    (4, 'test4'),
    (5, 'test5'),
    (6, 'test6'),
    (7, 'test7');