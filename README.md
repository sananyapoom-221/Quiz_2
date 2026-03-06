# Project: nv-Movie

This project is a variation of the nv-webblog68 project, extended with a new model: **Movie**.

## New Model: Movie

### Schema
- **title**: STRING\n- **director**: STRING\n- **genre**: STRING\n- **releaseYear**: INTEGER\n- **rating**: FLOAT

## New Controller
A dedicated controller `MovieController` has been added to handle CRUD operations for `Movie`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/movies` - Get all movies
- **POST** `/movie` - Create a new movie
- **GET** `/movie/:movieId` - Get a movie by ID
- **PUT** `/movie/:movieId` - Update a movie
- **DELETE** `/movie/:movieId` - Delete a movie

## Usage
Follow standard setup instructions for Client and Server.
