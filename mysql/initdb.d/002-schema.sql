SET CHARSET utf8;

DROP TABLE IF EXISTS app_users;

CREATE TABLE app_users
(
    id               bigint unsigned AUTO_INCREMENT,
    name             text NOT NULL,
    sex              int unsigned,
    age              int unsigned,
    sign_id          VARCHAR(255) unique NOT NULL,
    sign_pw          VARCHAR(255) NOT NULL,
    disabled         boolean DEFAULT false,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


DROP TABLE IF EXISTS companies;

CREATE TABLE companies
(
    id               bigint unsigned AUTO_INCREMENT,
    name             text,
    disabled         boolean DEFAULT NULL,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS stores;

CREATE TABLE stores
(
    id               bigint unsigned AUTO_INCREMENT,
    company_id       bigint unsigned,
    image            text,
    address          text,
    disabled         boolean DEFAULT NULL,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    FOREIGN KEY (company_id) 
    REFERENCES companies(id),
    PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS products;

CREATE TABLE products
(
    id               bigint unsigned AUTO_INCREMENT,
    name             text NOT NULL,
    image            text,
    price            int unsigned NOT NULL,
    type             int unsigned NOT NULL,
    disabled         boolean DEFAULT NULL,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
   PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS rfid_tags;

CREATE TABLE rfid_tags
(
    id               bigint unsigned AUTO_INCREMENT,
    product_id       bigint unsigned NOT NULL,
    rfid_code        text NOT NULL,
    sold             boolean DEFAULT NULL,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    FOREIGN KEY (product_id) 
     REFERENCES products(id),
    PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS product_stocks;

CREATE TABLE product_stocks
(
    store_id         bigint unsigned NOT NULL,
    product_id       bigint unsigned NOT NULL,
    stock            int    unsigned,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    FOREIGN KEY (store_id) 
     REFERENCES stores(id),
    FOREIGN KEY (product_id) 
     REFERENCES products(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS bought_products;

CREATE TABLE bought_products
(
    user_id          bigint unsigned NOT NULL,
    product_id       bigint unsigned NOT NULL,
    store_id         bigint unsigned NOT NULL,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    FOREIGN KEY (user_id) 
     REFERENCES app_users(id),
     FOREIGN KEY (store_id) 
     REFERENCES stores(id),
    FOREIGN KEY (product_id) 
     REFERENCES products(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS face_ids;

CREATE TABLE face_ids
(
    user_id          bigint unsigned NOT NULL,
    image            text NOT NULL,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    FOREIGN KEY (user_id) 
     REFERENCES app_users(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS tokens;

CREATE TABLE tokens
(
    id              bigint unsigned AUTO_INCREMENT,
    user_id         bigint unsigned NOT NULL,
    token           text NOT NULL,
    is_app          boolean NOT NULL DEFAULT TRUE,
    created_at       timestamp NOT NULL DEFAULT current_timestamp,
    updated_at       timestamp NOT NULL DEFAULT current_timestamp on update current_timestamp,
    FOREIGN KEY (user_id) 
     REFERENCES app_users(id),
    PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
