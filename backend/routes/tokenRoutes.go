package routes

import (
	"DEX/backend/controllers"

	"github.com/gorilla/mux"
)

func TokenRoutes(router *mux.Router) {
	router.HandleFunc("/tokens", controllers.CreateToken).Methods("POST", "OPTIONS")
	router.HandleFunc("/tokens", controllers.GetTokens).Methods("GET", "OPTIONS")
}
