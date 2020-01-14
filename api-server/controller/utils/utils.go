package utils

import (
	"api-server/model/table"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
)

func GetToken(user table.AppUsers) string {

	t := jwt.New(jwt.SigningMethodHS256)

	claims := t.Claims.(jwt.MapClaims)
	claims["admin"] = true
	claims["name"] = user.Name
	claims["gender"] = user.Sex
	claims["iat"] = time.Now()
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()

	token, _ := t.SignedString([]byte(HashPw(user.SignId + user.SignPw)))

	return token
}

func HashPw(pw string) string {
	// wip:ハッシュ関数
	return pw
}
