# Eatnet
A small project using PlantNetAPI to identify plants then displays if the plant is eadible by some animals

## Techno used
### Global
Docker
### Backend
NodeJS with Express, Redis, Knex, Morgan, Jest
### Frontend
Ionic with React and Capacitor

## How to run this project ?

- Set environment variables ('YOUR_XXXX') with your values in docker-compose.yaml
- Run ***`dependencies_installer.sh`*** script to install dependencies in *`api`* folder and *`react-ui`* folder
- Run ***`docker-compose -f {DOCKER_FILE_TO_RUN} up --build`*** from project root folder
```
docker-compose -f docker-compose.dev.yaml up --build
```

For debugging purposes, you can access directly a Docker container by running the above command:
```
// start a single container (where: {SERVICE_NAME} = api, postgres, react-ui, redis)
docker-compose -f docker-compose.dev.yml up --build {SERVICE_NAME}

// access directly a Docker container {SERVICE_NAME} = api, postgres, react-ui, redis)
docker exec -it stage-up-{SERVICE_NAME} /bin/bash

// check the status of all running containers:
docker ps -a

```

Explore database at localhost:5050 using credentials set in pgadmin container definition

***Make sure you use postgreSQL instead of mySQL for this code base.***