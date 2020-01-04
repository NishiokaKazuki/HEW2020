package query

import (
	"api-server/model/db"
	"api-server/model/table"
	"context"
	"errors"
)

func GetUser(ctx context.Context, id uint64) (table.AppUsers, error) {
	var (
		user table.AppUsers
		err  error
	)

	db := db.GetDBConnect()
	db.Where(
		"id = ?",
		id,
	).First(&user)
	if user.Id != id {
		err = errors.New("error : table[app_users] is not found.")
	}

	return user, err
}

func GetStore(ctx context.Context, id uint64) (table.Stores, error) {
	var (
		store table.Stores
		err   error
	)
	db := db.GetDBConnect()

	db.Joins(
		"inner join product_stocks on store.id = product_stocks.store_id",
		"inner join products on product_stocks.store_id = products.id",
	).Where(
		"id = ?",
		id,
	).First(&store)
	if store.Id != id {
		err = errors.New("error : table[stores] is not found.")
	}

	return store, err
}

func GetProduct(ctx context.Context, id uint64) (table.Products, error) {
	var (
		product table.Products
		err     error
	)
	db := db.GetDBConnect()

	db.Where(
		"id = ?",
		id,
	).First(&product)

	if product.Id != id {
		err = errors.New("error : table[products] is not found.")
	}

	return product, err
}
