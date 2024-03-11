FROM golang:1.22-alpine3.19

WORKDIR /app/api

COPY go.mod go.sum ./

RUN go mod download

COPY *.go ./

RUN go build -o /app/bin/api

CMD [ "/app/bin/api" ]