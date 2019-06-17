# MyLibrary
Angular project representing library system (CSCB854)

To start the app:
Go to server folder -> Genrerate your config file which will contain the port the server is running, connection string to the database and secret for the jwt token -> open a terminal -> `npm start`
Go to client folder -> `ng serve -o`

I had to do a project with Angular and nodejs so I decided to be a library.
It consists of an NodeJS API and Angular client.

The database is on mongodb and the connection between the API and the db is with mongoose. The database has 4 'tables': authors, genres, books, users

The API offers nothing more than basic auth functions and CRUD operations.

The client is simple and delivers a view for all the books and the authors and offers the ability to add/delete author/book if you are authenticated.