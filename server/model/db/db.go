package db

import (
	"fmt"
	"server/configs"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

const (
	configpath = "configs/config.toml"
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
	conf, err := configs.ReadDBConfig(configpath)
	if err != nil {
		panic(err.Error())
	}

	CONNECT := conf.User + ":" + conf.Pass + "@" + conf.Protocol + "/" + conf.Dbname + "?parseTime=true"

	return conf.Dbms, CONNECT
}
