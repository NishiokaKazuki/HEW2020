package query

import (
	"api-server/model/db"
	"api-server/model/join"
	"api-server/model/table"
	"context"
	"errors"
)

func FindProducts(ctx context.Context, storeId uint64) ([]join.Products, error) {
	var (
		products []join.Products
		err      error
	)

	db.GormConnect().Table(
		"products",
	).Select(
		"products.*, product_stocks.*",
	).Joins(
		"inner join product_stocks on product_stocks.product_id = products.id",
	).Where(
		"product_stocks.store_id = ?",
		storeId,
	).Scan(&products)

	if products[0].StoreId != storeId {
		err = errors.New("error : table[products] is not found.")
	}

	return products, err
}

func FindProductsByCode(ctx context.Context, tags []string) ([]table.Products, error) {
	var (
		products []table.Products
	)

	con := db.GormConnect()

	for _, tag := range tags {
		var (
			product  table.Products
			rfidTags table.RfidTags
		)

		result := con.Where(
			"rfid_tags.rfid_code = ?",
			tag,
		).First(&rfidTags)
		if result.Error != nil {
			return nil, errors.New("error : table[rfid_tags] is not found.")
		}

		result = con.Where(
			"products.id = ?",
			rfidTags.ProductId,
		).First(&product)
		if result.Error != nil {
			return nil, errors.New("error : table[products] is not found.")
		}
		products = append(products, product)
	}

	return products, nil
}

func FindBoughtProduts(ctx context.Context, userId uint64) ([]join.BoughtProducts, error) {
	var (
		products []join.BoughtProducts
		err      error
	)

	result := db.GormConnect().Table(
		"bought_products",
	).Select(
		"bought_products.*, product_stocks.*, products.*, companies.*, stores.*",
	).Order(
		"bought_products.created_at desc",
	).Order(
		"bought_products.store_id",
	).Order(
		"bought_products.product_id",
	).Joins(
		"inner join stores on stores.id = bought_products.store_id",
	).Joins(
		"inner join companies on companies.id = stores.company_id",
	).Joins(
		"inner join products on products.id = bought_products.product_id",
	).Joins(
		"inner join product_stocks on product_stocks.product_id = bought_products.product_id",
	).Where(
		"bought_products.user_id = ?",
		userId,
	).Scan(&products)
	if result.Error != nil {
		err = errors.New("error : join[bought_products] is not found.")
	}

	return products, err
}
