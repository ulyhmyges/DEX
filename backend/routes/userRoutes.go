package routes

import (
	"DEX/backend/controllers"

	"github.com/gorilla/mux"
)

func UserRoutes(router *mux.Router) {
	router.HandleFunc("/register", controllers.RegisterUser).Methods("POST", "OPTIONS")
	router.HandleFunc("/login", controllers.LoginUser).Methods("POST", "OPTIONS")
	router.HandleFunc("/users", controllers.GetUsers).Methods("GET", "OPTIONS")
}
