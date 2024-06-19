package utils

import (
	"encoding/json"
	"net/http"
)

type Message struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func RespondWithJSON(w http.ResponseWriter, status int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	w.Write(response)
}

func RespondWithError(w http.ResponseWriter, status int, message string) {
	RespondWithJSON(w, status, Message{Status: "error", Message: message})
}
