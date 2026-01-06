const crypto = require('crypto');

class CastService {
    cast = []; // Atributo

    //obtener todos los registros de reparto
    get() {
        return this.cast;
    }

    // Asociar actor a película con rol
    create(movieId, actorId, role) {
        const id = crypto.randomUUID();
        const newCast = { id, movieId, actorId, role };
        this.cast.push(newCast);
        return newCast;
    }

    //actualizar rol de actor

    update(id, role) {
    const index = this.cast.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.cast[index].role = role;
    return this.cast[index];
}


    // Obtener reparto de una película
    getByMovieId(movieId) {
        return this.cast.filter(c => c.movieId === movieId);
    }

    // Eliminar asociación de reparto
    delete(id) {
        const index = this.cast.findIndex(c => c.id === id);
        if (index === -1) {
            return null;
        }
        const deletedCast = this.cast[index];
        this.cast.splice(index, 1);
        return deletedCast;
    }
}

module.exports = CastService;
const {request} = require("express");