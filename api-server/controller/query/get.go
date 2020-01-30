package query

import (
	"api-server/model/db"
	"api-server/model/join"
	"api-server/model/table"
	"context"
	"errors"
)

func GetUser(ctx context.Context, id uint64) (table.AppUsers, error) {
	var (
		user table.AppUsers
		err  error
	)

	db.GetDBConnect().Where(
		"id = ?",
		id,
	).First(&user)
	if user.Id != id {
		err = errors.New("error : table[app_users] is not found.")
	}

	return user, err
}

func GetStore(ctx context.Context, id uint64) (join.Stores, error) {
	var (
		store join.Stores
		err   error
	)

	db.GetDBConnect().Table(
		"stores",
	).Select(
		"stores.*, companies.*",
	).Joins(
		"inner join companies on companies.id = stores.company_id",
	).Where(
		"stores.id = ?",
		id,
	).Scan(&store)

	if store.Stores.Id != id {
		err = errors.New("error : table[stores] is not found.")
	}

	return store, err
}

func GetProduct(ctx context.Context, id uint64) (table.Products, error) {
	var (
		product table.Products
		err     error
	)

	db.GetDBConnect().Where(
		"id = ?",
		id,
	).First(&product)
	if product.Id != id {
		err = errors.New("error : table[products] is not found.")
	}

	return product, err
}

func GetAuthTokens(ctx context.Context, token string) (table.Tokens, error) {
	var (
		tokens table.Tokens
		err    error
	)

	db.GetDBConnect().Where(
		"tokens.token = ? AND tokens.updated_at > DATE_SUB(current_timestamp(), INTERVAL 1 DAY)",
		token,
	).First(&tokens)
	if tokens.Token != token {
		err = errors.New("error : table[tokens] is not found.")
	}

	return tokens, err
}
