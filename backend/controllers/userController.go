package controllers

import (
	"DEX/backend/config"
	"DEX/backend/models"
	"encoding/json"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	var user models.User
	json.NewDecoder(r.Body).Decode(&user)

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	user.Password = string(hashedPassword)

	sqlStatement := `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`
	err = config.DB.QueryRow(sqlStatement, user.Username, user.Password).Scan(&user.ID)
	if err != nil {
		http.Error(w, "Username already taken", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}

func LoginUser(w http.ResponseWriter, r *http.Request) {
	var user models.User
	json.NewDecoder(r.Body).Decode(&user)

	var storedUser models.User
	sqlStatement := `SELECT id, username, password FROM users WHERE username=$1`
	row := config.DB.QueryRow(sqlStatement, user.Username)
	err := row.Scan(&storedUser.ID, &storedUser.Username, &storedUser.Password)
	if err != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(storedUser.Password), []byte(user.Password))
	if err != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(storedUser)
}
