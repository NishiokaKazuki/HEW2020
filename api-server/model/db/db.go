package db

import (
	"fmt"
	"api-server/configs"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db = GormConnect()

func GetDBConnect() *gorm.DB {
	return db
}

func GormConnect() *gorm.DB {

	db, err := gorm.Open(GetDBConfig())
	if err != nil {
		fmt.Println("filed:connect db")
		panic(err.Error())
	}

	return db
}

func GetDBConfig() (string, string) {
	conf, err := configs.ReadDBConfig("../configs/config.toml")
	if err != nil {
		panic(err.Error())
	}

	CONNECT := conf.User + ":" + conf.Pass + "@" + conf.Protocol + "/" + conf.Dbname

	return conf.Dbms, CONNECT
}
