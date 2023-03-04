# To run this fullstack website you need [NodeJS](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/)

 I would recommend you installing Postgres on a docker container by creating a *docker-compose.yml* file and adding these lines
 
      version: '3.8'
    services:
      db:
        container_name: pg_container
        image: postgres
        restart: always
        environment:
          POSTGRES_PASSWORD: password
        ports:
          - "5432:5432"
      pgadmin:
        container_name: pgadmin4_container
        image: dpage/pgadmin4
        restart: always
        environment:
          PGADMIN_DEFAULT_EMAIL: username@email.com
          PGADMIN_DEFAULT_PASSWORD: password
        ports:
          - "5000:80"

This will create two docker containers one for Postgres and one for PGadmin, in order for you to connect to Postgres on PGadmin check for the local IP address of Docker and add that as a host and the port you configured which in our case was 5432 as the port along with other detailes.
Then create a database called perntodo by running this code:

    CREATE DATABASE perntodo;

Then create the table which is fairly simple

    CREATE TABLE todo (
    	todo_id SERIAL PRIMARY KEY,
    	description VARCHAR(255)
    );

Once you have done all these steps clone the repo to your computer, cd into the client and server, run npm i and go to *server/db.json*  and edit the data based on your own configurations.
After you have done all these steps you can run this simple todo app 
:)