const crypto = require('crypto');

class MovieService {
    movies = []; // Atributo

    // Obtener todas las películas
    get() {
        return this.movies;
    }

    // Crear nueva película
    create(title, year, genre) {
        const id = crypto.randomUUID();
        const movie = { id, title, year, genre };
        this.movies.push(movie);
        return movie;
    }

    // Actualizar película
    update(id, title, year, genre) {
        const index = this.movies.findIndex(movie => movie.id === id);
        if (index === -1) {
            return null;
        }
        this.movies[index].title = title;
        this.movies[index].year = year;
        this.movies[index].genre = genre;
        return this.movies[index];
    }

    // Eliminar película
    delete(id) {
        const index = this.movies.findIndex(movie => movie.id === id);
        if (index === -1) {
            return null;
        }
        const deletedMovie = this.movies[index];
        this.movies.splice(index, 1);
        return deletedMovie;
    }

    // Obtener película por ID
    getById(id) {
        const index = this.movies.findIndex(movie => movie.id === id);
        if (index === -1) {
            return null;
        }
        return this.movies[index];
    }
}

module.exports = MovieService;
const {request} = require("express");