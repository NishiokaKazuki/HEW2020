package main

import (
	"api-server/controller"
	"api-server/model/db"
)

const (
	port = ":49200"
)

func main() {
	db := db.GormConnect()
	defer db.Close()

	controller.StartingServer(port)

}
