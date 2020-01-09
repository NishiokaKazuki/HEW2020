package join

import "api-server/model/table"

type Stores struct {
	table.Stores
	table.Companies
}

type Products struct {
	table.Products
	table.ProductStocks
}
