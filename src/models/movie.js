class Movie {
    #id = null;
    #title = null;
    #year = null;
    #genre = null;

    constructor(id, title, year, genre) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getYear() {
        return this.#year;
    }

    getGenre() {
        return this.#genre;
    }

    setId(id) {
        this.#id = id;
    }

    setTitle(title) {
        this.#title = title;
    }

    setYear(year) {
        this.#year = year;
    }

    setGenre(genre) {
        this.#genre = genre;
    }

    getValues() {
        return {
            id: this.getId(),
            title: this.getTitle(),
            year: this.getYear(),
            genre: this.getGenre()
        };
    }
}

module.exports = Movie;
