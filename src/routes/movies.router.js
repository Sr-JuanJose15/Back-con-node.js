const { Router } = require('express');
const MovieService = require('../services/movies.service');

const router = Router();
const movieService = new MovieService();

// Obtener todas las películas
router.get('/', (req, res) => {
    res.json(movieService.get());
});

// Crear película
router.post('/', (req, res) => {
    const { title, year, genre } = req.body;
    const movie = movieService.create(title, year, genre);
    res.status(201).json(movie);
});

// Actualizar película
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, year, genre } = req.body;
    const movie = movieService.update(id, title, year, genre);
    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
});

// Eliminar película
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const movie = movieService.delete(id);
    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
});

// Obtener película por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const movie = movieService.getById(id);
    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
});

module.exports = router;