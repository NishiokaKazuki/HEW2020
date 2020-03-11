package utils

import (
	"server/model/table"
	"strings"
	"time"

	"github.com/boombuler/barcode"
	"github.com/boombuler/barcode/qr"

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

	return strings.Replace(token, "_", "", -1)
}

func HashPw(pw string) string {
	// wip:ハッシュ関数
	return pw
}

func GenerateQrCode(token string) barcode.Barcode {

	qrCode, _ := qr.Encode(token, qr.L, qr.Auto)
	qrCode, _ = barcode.Scale(qrCode, 512, 512)

	return qrCode
}

// func GenerateQrCode(token string) {
// 	file, _ := os.Create(`./qr`)
// 	defer file.Close()

// 	qrCode, _ := qr.Encode(token, qr.L, qr.Auto)
// 	qrCode, _ = barcode.Scale(qrCode, 512, 512)
// 	png.Encode(io.Writer(file), qrCode)
// }
