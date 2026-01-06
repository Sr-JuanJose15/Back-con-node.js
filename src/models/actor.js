class Actor {
    #id = null;
    #name = null;
    #age = null;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    setId(id) {
        this.#id = id;
    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        this.#age = age;
    }

    getValues() {
        return {
            id: this.getId(),
            name: this.getName(),
            age: this.getAge()
        };
    }
}

module.exports = Actor;
