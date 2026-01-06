class Cast {
    #id = null;
    #movieId = null;
    #actorId = null;
    #role = null;

    constructor(id, movieId, actorId, role) {
        this.id = id;
        this.movieId = movieId;
        this.actorId = actorId;
        this.role = role;
    }

    getId() {
        return this.#id;
    }

    getMovieId() {
        return this.#movieId;
    }

    getActorId() {
        return this.#actorId;
    }

    getRole() {
        return this.#role;
    }

    setId(id) {
        this.#id = id;
    }

    setMovieId(movieId) {
        this.#movieId = movieId;
    }

    setActorId(actorId) {
        this.#actorId = actorId;
    }

    setRole(role) {
        this.#role = role;
    }

    getValues() {
        return {
            id: this.getId(),
            movieId: this.getMovieId(),
            actorId: this.getActorId(),
            role: this.getRole()
        };
    }
}

module.exports = Cast;
