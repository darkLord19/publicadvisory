package main

import (
	"log"
	"net/http"
	"os"

	"github.com/publicadvisory/backend/internal/httpapi"
)

func main() {
	addr := ":8080"
	if value := os.Getenv("PORT"); value != "" {
		addr = ":" + value
	}

	server := httpapi.NewServer()
	log.Printf("backend listening on %s", addr)
	if err := http.ListenAndServe(addr, server.Routes()); err != nil {
		log.Fatal(err)
	}
}
