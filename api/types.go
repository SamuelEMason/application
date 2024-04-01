package main

import (
	"time"
)

type userRole int;

const (
	USER = iota
	ADMIN
)

type CreateUserRequest struct {
	Email			string		`json:"Email"`
	Password  string    `json:"Password"`
}

type User struct {
	ID        int    		`json:"id"`
	FirstName string 		`json:"firstName"`
	LastName  string 		`json:"lastName"`
	Email			string		`json:"email"`
	Password  string    `json:"password"`
	Role 			userRole		`json:"role"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

func NewUser(email, password string) *User {
	return &User{
		FirstName: "",
		LastName:  "",
		Email:		 email,
		Password:  password,
		Role: 		 USER,
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
	}
}

type ErrMsg struct {
	Error string	`json:"error"`
}