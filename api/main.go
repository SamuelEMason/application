package main

import (
	"log"
)

func main() {
	store, err := NewPostgresStore()
	if err != nil {
		log.Fatal(err)
	}

	if err := store.Init(); err != nil {
		log.Fatal(err)
	}
	log.Println("DB initialization successful!")

	server := NewAPIServer("localhost:8000", store)
	server.Run()
}
