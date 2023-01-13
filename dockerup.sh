#!/bin/bash

#source ./backend/src/.env

if [ $1 == "install" ]; then
	docker build --tag portfolio_backend ./backend
	docker build --tag portfolio_frontend ./frontend
	docker-compose --env-file ./backend/src/.env up -d
elif [ $1 == "deploy" ]; then
	docker login
	docker build --tag portfolio_backend ./backend
	docker build --tag portfolio_frontend ./frontend

else
	echo '[ERROR] Action inexits'
fi