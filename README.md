Desafio GO

https://hub.docker.com/repository/docker/williansvf/codeeducation


Desafio DockerCompose

    - start the app
        docker-compose -d up --build

    - insert person
        POST localhost:8080
        Json:{
            "name":"NAME"
        }
    - list people
        GET localhost:8080