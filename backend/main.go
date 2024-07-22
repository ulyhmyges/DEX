package main

import (
	"DEX/backend/config"
	middleware "DEX/backend/middlewares"
	"DEX/backend/routes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func Cap() {
	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", nil)
	if err != nil {
		log.Print(err)
		os.Exit(1)
	}

	q := url.Values{}
	q.Add("start", "1")
	q.Add("limit", "500")
	q.Add("convert", "USD")

	req.Header.Set("Accepts", "application/json")
	//API_KEY=8958b1e7-36e6-4335-9ff7-86f9da097128
	req.Header.Add("X-CMC_PRO_API_KEY", "8958b1e7-36e6-4335-9ff7-86f9da097128")
	req.URL.RawQuery = q.Encode()

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request to server")
		os.Exit(1)
	}

	defer resp.Body.Close()

	fmt.Println(resp.Status)
	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Print(err)
		return
	}

	if resp.StatusCode != http.StatusOK {
		log.Printf("API responded with status code %d.", resp.StatusCode)
		return
	}

	var response map[string]interface{}
	if err := json.Unmarshal(respBody, &response); err != nil {
		log.Print("Error parsing JSON response")
		return
	}

	for i, obj := range response {
		fmt.Println("objet num: ", i)
		objMap, err := obj.(map[string]interface{})
		if !err {
			log.Printf("expected map[string]interface{}, got %T", obj)
		}
		if i == "data" {
			objData, ok := obj.([]interface{})
			if !ok {
				log.Println("Expected a []interface{}")
			}
			for j, item := range objData {
				log.Println(j)
				log.Println(item)

			}
		}
		for key, value := range objMap {
			fmt.Printf("key: %s, Value: %v\n", key, value)
		}
	}

}

func main() {
	godotenv.Load()
	router := mux.NewRouter()

	config.ConnectDB()

	router.Use(middleware.EnableCORS)

	routes.TokenRoutes(router)
	routes.UserRoutes(router)
	Cap()

	err := http.ListenAndServe(":8080", router)
	if err != nil {
		log.Fatal("Failed to start the server: " + err.Error())
	}
	log.Println("Server running on port 8080...")
}
