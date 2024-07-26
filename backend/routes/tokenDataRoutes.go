package routes

import (
	"DEX/backend/controllers"

	"github.com/gorilla/mux"
)

func TokenDataRoutes(router *mux.Router) {
	router.HandleFunc("/tokens/market-data", controllers.GetTokensWithMarketData).Methods("GET")
}
