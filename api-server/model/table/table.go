package table

import (
	"api-server/generated/enums"
	"time"
)

type AppUsers struct {
	Id     uint64
	Name   string
	Sex    enums.SexTypes
	SignId string
	SignPw string
}

type Stores struct {
	Id        uint64
	Image     string
	Address   string
	CompanyId uint64
}

type Companies struct {
	Id   uint64
	Name string
}

type Products struct {
	Id    uint64
	Name  string
	Image string
	Price uint32
	Type  uint8
}

type RfidTags struct {
	Id        uint64
	ProductId uint64
	RfidCode  string
	Sold      bool
}

type ProductStocks struct {
	StoreId   uint64
	ProductId uint64
	Stock     uint32
}

type BoughtProducts struct {
	UserId    uint64
	ProductId uint64
	Date      time.Time
}

type FaceIds struct {
	UserId uint64
	Image  string
}
