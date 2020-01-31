package query

import (
	"server/model/db"
	"server/model/table"
	"context"
	"errors"
)

func UpdateRfidTags(ctx context.Context, tags []string) error {
	for _, tag := range tags {
		result := db.GetDBConnect().Table(
			"rfid_tags",
		).Where(
			"rfid_tags.rfid_code = ?",
			tag,
		).Update(&table.RfidTags{
			Sold: true,
		})
		if result.Error != nil {
			return errors.New("error : table[rfid_tags] cannot update.")
		}
	}

	return nil
}
