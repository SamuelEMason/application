package main

import (
	"api/cmd/api"
	"api/db"
	"log"
)

func main() {
	db, err := db.NewDB()
	if err != nil {
		log.Fatal(err)
	}

	log.Println(db)

	server := api.NewAPIServer("localhost:8000", nil)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}


