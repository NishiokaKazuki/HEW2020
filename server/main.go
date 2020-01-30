package main

import (
	"server/controller"
	"server/model/db"
)

const (
	port1 = ":49200"
	port2 = ":49201"
)

func main() {
	db := db.GormConnect()
	defer db.Close()

	finish := make(chan bool)

	go controller.StartingServer(port1)
	// go controller.StartingMachaServer(port2)

	<-finish

}
