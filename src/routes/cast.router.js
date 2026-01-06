const { Router } = require('express');
const CastService = require('../services/cast.service');

const router = Router();
const castService = new CastService();


// Obtener todas las asociaciones
router.get('/', (req, res) => {
    res.json(castService.get());
});

// Asociar actor a película
router.post('/', (req, res) => {
    const { movieId, actorId, role } = req.body;
    const newCast = castService.create(movieId, actorId, role);
    res.status(201).json(newCast);
});

// Actualizar el role de un cast
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    const updatedCast = castService.update(id, role);
    if (!updatedCast) {
        return res.status(404).json({ message: "Cast record not found" });
    }
    res.json(updatedCast);
});


// Obtener reparto de una película // con el id de la pelicula
router.get('/:movieId', (req, res) => {
    const { movieId } = req.params;
    res.json(castService.getByMovieId(movieId));
});

// Eliminar un registro de reparto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletedCast = castService.delete(id);
    if (!deletedCast) {
        return res.status(404).json({ message: "Cast record not found" });
    }
    res.json(deletedCast);
});



module.exports = router;