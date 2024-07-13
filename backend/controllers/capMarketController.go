package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
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
	for i := range response {
		fmt.Println(response[i])
	}

}

func CapMarket(w http.ResponseWriter, r *http.Request) {
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
	//q.Add("symbol", "BTC,ETC,BCH,XRP")
	//q.Add("slug", "ethereum")

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
		http.Error(w, "Error reading response from server", http.StatusInternalServerError)
		return
	}

	if resp.StatusCode != http.StatusOK {
		http.Error(w, fmt.Sprintf("API responded with status code %d", resp.StatusCode), resp.StatusCode)
	}

	// var response map[string]interface{}
	// if err := json.Unmarshal(respBody, &response); err != nil {
	// 	http.Error(w, "Error parsing JSON response", http.StatusInternalServerError)
	// 	return
	// }

	// data, ok := response["data"]
	// if !ok {
	// 	http.Error(w, "No data found in response", http.StatusInternalServerError)
	// 	return
	// }

	// dataJSON, err := json.Marshal(response)
	// if err != nil {
	// 	http.Error(w, "Error serializing data to JSON", http.StatusInternalServerError)
	// 	return
	// }

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(respBody)
	fmt.Println(string(respBody))

}
