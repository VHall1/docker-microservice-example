package main

import (
	"encoding/json"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(&[]string{"Ice Cream", "Chocolate", "Fruit"})
	})

	http.ListenAndServe(":80", mux)
}
