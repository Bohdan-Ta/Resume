run:
	docker run -d -p 80:4200 --env-file ./config/.env --rm --name resume resume:volumes
stop:
	docker stop resume