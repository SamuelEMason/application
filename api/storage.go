package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

type Storage interface {
	GetUsers() ([]*User, error)
	GetUserByID(int) (*User, error)
	CreateUser(*User) error
	DeleteUser(int) error
	UpdateUser(*User) error
}

type PostgresStore struct {
	db *sql.DB
}

func NewPostgresStore() (*PostgresStore, error) {
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Println("here")
		return nil, err
	}
	if err := db.Ping(); err != nil {
		log.Println("or here")

		return nil, err
	}
	return &PostgresStore{
		db: db,
	}, nil
}

func (s *PostgresStore) Init() error {
	return s.createUserTable()
}

func (s *PostgresStore) createUserTable() error {
	query := `CREATE TABLE IF NOT EXISTS "user" (
		id serial 	PRIMARY KEY,
		first_name 	VARCHAR(50),
		last_name 	VARCHAR(50),
		email 			VARCHAR(50) unique,
		password 		VARCHAR(50),
		role 				INTEGER,
		created_at 	TIMESTAMP,
		updated_at 	TIMESTAMP
	)`

	_, err := s.db.Exec(query)
	return err
}

func (s *PostgresStore) GetUsers() ([]*User, error) {
	rows, err := s.db.Query("SELECT * FROM \"user\"")
	if err != nil {
		return nil, err
	}

	users := []*User{}

	for rows.Next() {
		user := new(User)
		err := rows.Scan(&user.ID, 
			&user.FirstName, 
			&user.LastName, 
			&user.Email, 
			&user.Password,
			&user.Role,
			&user.CreatedAt,
			&user.UpdatedAt,
		)

		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

func (s *PostgresStore) GetUserByID(id int) (*User, error) {
	return &User{}, nil
}

func (s *PostgresStore) CreateUser(user *User) error {
	query := `INSERT INTO "user" (
		first_name, last_name, email, password, role, created_at, updated_at
	) 
	VALUES ($1, $2, $3, $4, $5, $6, $7)`

	res, err := s.db.Query(query, 
		user.FirstName, 
		user.LastName, 
		user.Email, 
		user.Password, 
		user.Role, 
		user.CreatedAt, 
		user.UpdatedAt)
	if err != nil {
		return err
	}

	fmt.Printf("%+v\n", res)
	
	return nil
}

func (s *PostgresStore) UpdateUser(user *User) error {
	return nil
}

func (s *PostgresStore) DeleteUser(id int) error {
	return nil
}

