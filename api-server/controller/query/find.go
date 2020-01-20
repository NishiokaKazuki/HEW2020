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
