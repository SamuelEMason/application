package db

import (
	"database/sql"
	"os"
)

type Database struct {
	db *sql.DB
}

func NewDB() (*Database, error) {
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		return nil, err
	}

	return &Database{db: db}, nil
}

func (s *Database) Close() {
	s.db.Close()
}

func (s *Database) GetDB() *sql.DB {
	return s.db
}