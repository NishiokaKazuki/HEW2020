package query

import (
	u "api-server/controller/utils"
	"api-server/model/db"
	"api-server/model/table"
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
			err = errors.New("error : table[app_users] is not found.")
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
		err error
	)

	db := db.GetDBConnect()
	result := db.Create(&user)
	if result.Error != nil {
		err = errors.New("error : table[app_users] is cannot create.")
	}

	return user, err
}
