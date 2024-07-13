package routes

import (
	"DEX/backend/controllers"

	"github.com/gorilla/mux"
)

func CapMarketRoutes(router *mux.Router) {
	router.HandleFunc("/cap", controllers.CapMarket).Methods("GET")
}
