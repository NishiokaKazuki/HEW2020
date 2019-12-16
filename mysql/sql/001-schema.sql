DROP TABLE IF EXISTS `app_users`;

create table if not exists `app_users`
(
    id               bigint unsigned ,
    name             text NOT NULL,
    sex              tinyint unsigned,
    age              tinyint unsigned,
    sign_id          text NOT NULL,
    sign_pw          text NOT NULL,
    disabled         boolean DEFAULT NULL,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `stores`;

create table if not exists `stores`
(
    id               bigint unsigned ,
    image            text,
    address          text,
    company_id       bigint unsigned NOT NULL,
    disabled         boolean DEFAULT NULL,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
    FOREIGN KEY (company_id) REFERENCES companies(id),
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


DROP TABLE IF EXISTS `companies`;

create table if not exists `companies`
(
    id               bigint unsigned,
    name             text,
    disabled         boolean DEFAULT NULL,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `products`;

create table if not exists `products`
(
    id               bigint unsigned ,
    name             text NOT NULL,
    image            text,
    price            int unsigned NOT NULL,
    type             tinyint unsigned NOT NULL,
    disabled         boolean DEFAULT NULL,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `rfid_tags`;

create table if not exists `rfid_tags`
(
    id               bigint unsigned,
    product_id       bigint unsigned NOT NULL,
    rfid_code        text NOT NULL,
    sold             boolean DEFAULT NULL,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
   PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `product_stocks`;

create table if not exists `product_stocks`
(
    store_id         bigint unsigned NOT NULL,
    product_id       bigint unsigned NOT NULL,
    stock            int    unsigned,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
    FOREIGN KEY (store_id) REFERENCES stores(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `bought_products`;

create table if not exists `bought_products`
(
    user_id          bigint unsigned NOT NULL,
    product_id       bigint unsigned NOT NULL,
    date             Datetime DEFAULT NULL,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `face_ids`;

create table if not exists `face_ids`
(
    user_id          bigint unsigned NOT NULL,
    image            text NOT NULL,
    created_at       Datetime DEFAULT NULL,
    updated_at       Datetime DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
