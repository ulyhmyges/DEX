package models

type Token struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Symbol string `json:"symbol"`
	InitialSupply int `json:"initial_supply"`
	Address string `json:"address"`
	Sender string `json:"sender"`
	BlockchainName string `json:"blockchain_name"`
	Tx string `json:"tx"`
}
