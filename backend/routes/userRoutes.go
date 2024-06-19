package routes

import (
	"DEX/backend/controllers"

	"github.com/gorilla/mux"
)

func UserRoutes(router *mux.Router) {
	router.HandleFunc("/register", controllers.RegisterUser).Methods("POST")
	router.HandleFunc("/login", controllers.LoginUser).Methods("POST")
}
