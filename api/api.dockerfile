FROM golang:1.22-alpine3.19

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY *.go ./

## Hot-Reloading w/ Air
RUN go get -u github.com/cosmtrek/air
RUN go install github.com/cosmtrek/air@latest

ENTRYPOINT [ "air" ]