package main

import (
	"api-server/model/db"
)

func main() {
	db := db.GormConnect()
	defer db.Close()
}
