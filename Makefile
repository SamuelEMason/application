up:
	@docker-compose up --build -d

down:
	@docker-compose down

reset: down up