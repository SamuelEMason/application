package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type APIServer struct {
	listenAddr string
	store      Storage
}

func NewAPIServer(listenAddr string, store Storage) *APIServer {
	return &APIServer{
		listenAddr: listenAddr,
		store:      store,
	}
}

func (s *APIServer) Run() {
	router := mux.NewRouter()

	router.HandleFunc("/user", makeHTTPHandleFunc(s.handleUser))
	router.HandleFunc("/user/{id}", makeHTTPHandleFunc(s.handleGetUserByID))

	log.Println("JSON API server running on port:", s.listenAddr)

	http.ListenAndServe(s.listenAddr, router)
}

func (s *APIServer) handleUser(w http.ResponseWriter, r *http.Request) error {
	switch r.Method {
	case "GET":
		return s.handleGetUser(w, r)
	case "POST":
		return s.handleCreateUser(w, r)
	case "DELETE":
		return s.handleDeleteUser(w, r)
	}
	return fmt.Errorf("method not allowed %s", r.Method)
}

func (s *APIServer) handleGetUser(w http.ResponseWriter, r *http.Request) error {
	users, err := s.store.GetUsers()
	if err != nil {
		return err
	}
	return WriteJSON(w, http.StatusOK, users)
}

func (s *APIServer) handleGetUserByID(w http.ResponseWriter, r *http.Request) error {
	vars := mux.Vars(r)
	id := vars["id"]

	fmt.Println(id)

	return WriteJSON(w, http.StatusOK, &User{})
}

func (s *APIServer) handleCreateUser(w http.ResponseWriter, r *http.Request) error {
	createUserReq := new(CreateUserRequest)
	if err := json.NewDecoder(r.Body).Decode(createUserReq); err != nil {
		return err
	}

	user := NewUser(createUserReq.Email, createUserReq.Password)

	if err := s.store.CreateUser(user); err != nil {
		return err
	}

	return WriteJSON(w, http.StatusOK, user)
}

func (s *APIServer) handleDeleteUser(w http.ResponseWriter, r *http.Request) error {
	log.Println(w, r)
	return nil
}

// func (s *APIServer) handleTransfer(w http.ResponseWriter, r *http.Request) error {
// 	return nil
// }

func WriteJSON(w http.ResponseWriter, status int, v any) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(v)
}

type apiFunc func(http.ResponseWriter, *http.Request) error

type apiError struct {
	Error string
}

func makeHTTPHandleFunc(f apiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w, r); err != nil {
			WriteJSON(w, http.StatusBadRequest, apiError{Error: err.Error()})
		}
	}
}
