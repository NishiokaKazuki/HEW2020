package query

import (
	"server/model/db"
	"server/model/table"
	"context"
	"errors"
)

func DeleteToken(ctx context.Context, token string, isApp bool) error {
	var err error

	db := db.GetDBConnect()
	result := db.Where(
		"tokens.token = ? AND is_app = ?",
		token,
		isApp,
	).Delete(table.Tokens{})
	if result.Error != nil {
		err = errors.New("error : table[tokens] cannot delete.")
	}

	return err
}
