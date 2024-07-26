package controllers

import (
	"DEX/backend/config"
	"DEX/backend/models"
	"encoding/json"
	"net/http"
)

func CreateToken(w http.ResponseWriter, r *http.Request) {
	var token models.Token
	json.NewDecoder(r.Body).Decode(&token)

	sqlStatement := `INSERT INTO tokens (name, symbol, initial_supply, address, sender, blockchain_name, tx) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`
	id := 0
	err := config.DB.QueryRow(sqlStatement, token.Name, token.Symbol, token.InitialSupply, token.Address, token.Sender, token.BlockchainName, token.Tx).Scan(&id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	token.ID = id
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(token)
}

func GetTokens(w http.ResponseWriter, r *http.Request) {
	rows, err := config.DB.Query("SELECT id, name, symbol, initial_supply, address, sender, blockchain_name, tx FROM tokens")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var tokens []models.Token
	for rows.Next() {
		var token models.Token
		err := rows.Scan(&token.ID, &token.Name, &token.Symbol, &token.InitialSupply, &token.Address, &token.Sender, &token.BlockchainName, &token.Tx)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		tokens = append(tokens, token)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tokens)
}
