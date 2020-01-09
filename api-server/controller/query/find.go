package query

import (
	"api-server/model/db"
	"api-server/model/join"
	"context"
	"errors"
)

func FindProducts(ctx context.Context, storeId uint64) ([]join.Products, error) {
	var (
		products []join.Products
		err      error
	)

	db := db.GormConnect()
	db.Table(
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
