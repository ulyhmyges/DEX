package models

type Coin struct {
	ID           int64   `json:"id"`
	Name         string  `json:"name"`
	Symbol       string  `json:"symbol"`
	Price        float64 `json:"price"`
	Volume_24h   float64 `json:"volume_24h"`
	Total_supply float64 `json:"total_supply"`
}
