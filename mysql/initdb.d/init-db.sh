# CreateTable
mysql -u root -psecret < "/docker-entrypoint-initdb.d/001-init.sql"
mysql -u root -psecret hew2020 < "/docker-entrypoint-initdb.d/002-schema.sql"
mysql -u root -psecret hew2020 < "/docker-entrypoint-initdb.d/999-dummy.sql"