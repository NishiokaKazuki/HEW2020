package join

import "server/model/table"

type Stores struct {
	table.Stores
	table.Companies
}

type Products struct {
	table.Products
	table.ProductStocks
}

type BoughtProducts struct {
	table.BoughtProducts
	table.ProductStocks
	table.Products
	table.Companies
	table.Stores
}
