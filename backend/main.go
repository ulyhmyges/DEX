package main

import (
	"DEX/backend/config"
	middleware "DEX/backend/middlewares"
	"DEX/backend/routes"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	router := mux.NewRouter()

	config.ConnectDB()

	router.Use(middleware.EnableCORS)

	routes.TokenRoutes(router)
	routes.UserRoutes(router)

	err := http.ListenAndServe(":8080", router)
	if err != nil {
		log.Fatal("Failed to start the server: " + err.Error())
	}
	log.Println("Server running on port 8080...")
}
