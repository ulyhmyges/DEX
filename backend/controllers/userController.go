package controllers

import (
	"DEX/backend/config"
	"DEX/backend/models"
	"encoding/json"
	"net/http"

	"github.com/lib/pq"
	"golang.org/x/crypto/bcrypt"
)

func GetUsers(w http.ResponseWriter, r *http.Request){
	var users []models.User
	sqlStatement := `SELECT id, username, password FROM users`
	rows, err := config.DB.Query(sqlStatement)
	if err != nil {
		http.Error(w, "Database error: "+err.Error(), http.StatusInternalServerError)
	}
	defer rows.Close()

	for rows.Next() {
        var user models.User
        // Scan the row into the user struct
        if err := rows.Scan(&user.ID, &user.Username, &user.Password); err != nil {
            http.Error(w, "Error scanning database results: "+err.Error(), http.StatusInternalServerError)
            return
        }
        // Append the user to the slice
        users = append(users, user)
    }

	// Check for errors encountered during iteration
	if err := rows.Err(); err != nil {
        http.Error(w, "Error iterating over database results: "+err.Error(), http.StatusInternalServerError)
        return
    }

	w.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(w).Encode(users)
	if err != nil {
		http.Error(w, "Failed to encode response as JSON "+ err.Error(), http.StatusInternalServerError)
		return
	}
}

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Invalid input: " + err.Error(), http.StatusBadRequest)
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Failed to hash password: " + err.Error(), http.StatusInternalServerError)
		return
	}
	user.Password = string(hashedPassword)

	sqlStatement := `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`
	err = config.DB.QueryRow(sqlStatement, user.Username, user.Password).Scan(&user.ID)
	if err != nil {
		// Differentiate between unique constraint violation and other errors
		if pqErr, ok := err.(*pq.Error); ok {
			if pqErr.Code.Name() == "unique_violation" {
				http.Error(w, "Username already taken", http.StatusBadRequest)
			} else {
				http.Error(w, "Database error: " + pqErr.Message, http.StatusInternalServerError)
			}
		} else {
			http.Error(w, "Database error!", http.StatusInternalServerError)
		}
		return
	}

	w.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(w).Encode(user)
	if err != nil {
		http.Error(w, "Failed to encode response: " + err.Error(), http.StatusInternalServerError)
		return
	}
}

func LoginUser(w http.ResponseWriter, r *http.Request) {
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var storedUser models.User
	sqlStatement := `SELECT id, username, password FROM users WHERE username=$1`
	row := config.DB.QueryRow(sqlStatement, user.Username)
	err = row.Scan(&storedUser.ID, &storedUser.Username, &storedUser.Password)
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
	err = json.NewEncoder(w).Encode(storedUser)
	if err != nil {
		http.Error(w, "Failed to encode response: "+ err.Error(), http.StatusInternalServerError)
		return
	}
}
