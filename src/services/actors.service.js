const crypto = require('crypto');

class ActorService {
    actors = []; // Atributo

    // Obtener todos los actores
    get() {
        return this.actors;
    }

    // Crear nuevo actor
    create(name, age) {
        const id = crypto.randomUUID();
        const actor = { id, name, age };
        this.actors.push(actor);
        return actor;
    }

    // Actualizar actor
    update(id, name, age) {
        const index = this.actors.findIndex(actor => actor.id === id);
        if (index === -1) {
            return null;
        }
        this.actors[index].name = name;
        this.actors[index].age = age;
        return this.actors[index];
    }

    // Eliminar actor
    delete(id) {
        const index = this.actors.findIndex(actor => actor.id === id);
        if (index === -1) {
            return null;
        }
        const deletedActor = this.actors[index];
        this.actors.splice(index, 1);
        return deletedActor;
    }

    // Obtener actor por ID
    getById(id) {
        const index = this.actors.findIndex(actor => actor.id === id);
        if (index === -1) {
            return null;
        }
        return this.actors[index];
    }
}

module.exports = ActorService;
const {request} = require("express");