package controller

func getToken(id string, pw string) string {
	var token string

	// tokenダミー
	token = id + pw

	return token
}

func Hashpw(pw string) string {
	// ハッシュ関数
	return pw
}
