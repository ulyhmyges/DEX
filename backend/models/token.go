package models

type Token struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Symbol string `json:"symbol"`
	InitialSupply int `json:"initial_supply"`
	Sender string `json:"sender"`
	Tx string `json:"tx"`
	BlockchainName string `json:"blockchain_name"`
}
