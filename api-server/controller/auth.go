package controller

import (
	"api-server/controller/query"
	"api-server/controller/utils"
	"api-server/model/db"
	"api-server/model/table"
	"context"
	"errors"
)

func Auth(ctx context.Context, token string) (uint64, error) {

	tokens, err := query.GetAuthTokens(ctx, token)
	if err != nil {
		return 0, err
	}

	return tokens.UserId, err
}

func signin(ctx context.Context, signid, signpw string) (table.AppUsers, error) {
	var (
		user table.AppUsers
		err  error
	)

	db := db.GormConnect()
	db.Where(
		"sign_id = ? AND sign_pw = ?",
		signid,
		utils.HashPw(signpw),
	).First(&user)
	if user.SignId != signid {
		err = errors.New("error : table[app_users] is not found.")
	}

	return user, err
}
