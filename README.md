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

- Create a Plantnet developer account here (https://my.plantnet.org/signup) in order to have a (free) developer plantnet api key
- Set environment variables ('SET_XXXX') with your values in docker-compose.yaml
- Run ***`dependencies_installer.sh`*** script to install dependencies in *`api`* folder and *`react-ui`* folder
- Run ***`docker-compose -f {DOCKER_FILE_TO_RUN} up --build`*** from project root folder
```
docker-compose -f docker-compose.dev.yaml up --build -d
```

For debugging purposes, you can access directly a Docker container by running the above command:
```
// start a single container (where: {SERVICE_NAME} = api, postgres, react-ui, redis)
docker-compose -f docker-compose.dev.yaml up --build {SERVICE_NAME}

// access directly a Docker container {SERVICE_NAME} = api, postgres, react-ui, redis)
docker exec -it eatnet-{SERVICE_NAME} /bin/bash

// check the status of all running containers:
docker ps -a

```

Run react-ui in browser with:
```
cd ./react-ui
ionic serve
```

Run api tests with:
```
docker exec eatnet-api-dev sh -c "npm run test"
```

Explore database at localhost:5050 using credentials set in pgadmin container definition

***Make sure you use postgreSQL instead of mySQL for this code base.***

## Variables to replace
- SET_YOUR_USER: ex. admin
- SET_YOUR_PASSWORD: ex. password
- SET_YOUR_PGADMIN_EMAIL: ex. admin@admin.com
- SET_YOUR_PGADMIN_PASSWORD: ex. password
- SET_API_URL: ex. http://127.0.0.1:80
- SET_PLANTNET_APIKEY (only used when testing with Jest): ex. 5g8s4g8c5df987gdq213dg4ds


## App preview
### --- "Réglages" tab ---
#### Register
![Register screen](./documentation/images/1_register.png)
#### Sign in
![Register screen](./documentation/images/2_signin.png)
#### User connected
![Register screen](./documentation/images/3_connected.png)
### --- "Aliments" tab ---
#### Plant list
![Register screen](./documentation/images/4_plantlist.png)
#### Scroll menu to letter M
![Register screen](./documentation/images/5_plantlist_scroll_to_M.png)
#### Search by name
![Register screen](./documentation/images/6_plantlist_search_name.png)
#### Filtering
![Register screen](./documentation/images/7_plantlist_filter.png)
#### Results from filter
![Register screen](./documentation/images/8_plantlist_filter_results.png)
### --- "Recherche" tab ---
#### Search form
![Register screen](./documentation/images/9_search.png)
#### Choosing referential to optimize analysis
![Register screen](./documentation/images/10_search_referential.png)
#### Choosing image to analyse, either from the gallery or from camera
![Register screen](./documentation/images/11_search_button.png)
#### Defining which organ the image is reflecting to optimize analysis
![Register screen](./documentation/images/12_search_organ.png)
#### Results
![Register screen](./documentation/images/12_search_results.png)