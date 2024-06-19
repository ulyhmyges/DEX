package controllers

import (
	"DEX/backend/config"
	"DEX/backend/models"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

type TokenData struct {
	ID        int     `json:"id"`
	Name      string  `json:"name"`
	Symbol    string  `json:"symbol"`
	Price     float64 `json:"price"`
	Volume24h float64 `json:"volume24h"`
}

func CreateToken(w http.ResponseWriter, r *http.Request) {
	var token models.Token
	json.NewDecoder(r.Body).Decode(&token)

	sqlStatement := `INSERT INTO tokens (name, symbol) VALUES ($1, $2) RETURNING id`
	id := 0
	err := config.DB.QueryRow(sqlStatement, token.Name, token.Symbol).Scan(&id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	token.ID = id
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(token)
}

func GetTokens(w http.ResponseWriter, r *http.Request) {
	rows, err := config.DB.Query("SELECT id, name, symbol FROM tokens")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var tokens []models.Token
	for rows.Next() {
		var token models.Token
		err := rows.Scan(&token.ID, &token.Name, &token.Symbol)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		tokens = append(tokens, token)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tokens)
}

func fetchCoinMarketCapData(symbol string) (float64, float64, error) {
	apiKey := os.Getenv("CMC_API_KEY")
	url := fmt.Sprintf("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=%s", symbol)

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("X-CMC_PRO_API_KEY", apiKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return 0, 0, err
	}
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)

	var result map[string]interface{}
	json.Unmarshal(body, &result)

	data, exists := result["data"].(map[string]interface{})[symbol].(map[string]interface{})
	if !exists {
		return 0, 0, fmt.Errorf("no data for symbol %s", symbol)
	}

	price := data["quote"].(map[string]interface{})["USD"].(map[string]interface{})["price"].(float64)
	volume24h := data["quote"].(map[string]interface{})["USD"].(map[string]interface{})["volume_24h"].(float64)

	return price, volume24h, nil
}

func GetTokensWithMarketData(w http.ResponseWriter, r *http.Request) {
	rows, err := config.DB.Query("SELECT id, name, symbol FROM tokens")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var tokens []TokenData
	for rows.Next() {
		var token TokenData
		err := rows.Scan(&token.ID, &token.Name, &token.Symbol)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		price, volume24h, err := fetchCoinMarketCapData(token.Symbol)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		token.Price = price
		token.Volume24h = volume24h

		tokens = append(tokens, token)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tokens)
}
