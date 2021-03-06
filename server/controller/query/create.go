package query

import (
	u "server/controller/utils"
	"server/model/db"
	"server/model/table"
	"context"
	"errors"
)

func CreateToken(ctx context.Context, user table.AppUsers) (string, error) {
	var (
		token  string
		tokens table.Tokens
		err    error
	)

	db := db.GetDBConnect()
	db.Where(
		"tokens.user_id = ?",
		user.Id,
	).First(&tokens)

	token = u.GetToken(user)
	if tokens.UserId == user.Id {
		result := db.Table(
			"tokens",
		).Where(
			"tokens.user_id = ?",
			user.Id,
		).Update(
			&table.Tokens{
				UserId: user.Id,
				Token:  token,
			},
		)
		if result.Error != nil {
			err = errors.New("Not Found")
		}

	} else {
		result := db.Table(
			"tokens",
		).Create(
			&table.Tokens{
				UserId: user.Id,
				Token:  token,
			},
		)
		if result.Error != nil {
			err = errors.New("error : table[tokens] cannot create.")
		}
	}

	return token, err
}

func CreateUser(ctx context.Context, user table.AppUsers) (table.AppUsers, error) {
	var (
		err    error
		exists table.AppUsers
	)

	db := db.GetDBConnect()

	db.Where(
		"sign_id = ?",
		user.SignId,
	).First(&exists)
	if exists.Id != 0 {
		return table.AppUsers{}, errors.New("sign_id already exists")
	}

	result := db.Create(&user)
	if result.Error != nil {
		err = errors.New("error : table[app_users] cannot create.")
	}

	return user, err
}

func CreateBoughtProducts(ctx context.Context, productIds []uint64, userId, storeId uint64) error {

	for _, productId := range productIds {
		result := db.GetDBConnect().Create(&table.BoughtProducts{
			UserId:    userId,
			ProductId: productId,
			StoreId:   storeId,
		})
		if result.Error != nil {
			return errors.New("error : table[bought_products] cannot create.")
		}
	}

	return nil
}
