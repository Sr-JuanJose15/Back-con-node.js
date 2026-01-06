const { Router } = require('express');
const ActorService = require('../services/actors.service');

const router = Router();
const actorService = new ActorService();

// Obtener todos los actores
router.get('/', (req, res) => {
    res.json(actorService.get());
});

// Crear actor
router.post('/', (req, res) => {
    const { name, age } = req.body;
    const actor = actorService.create(name, age);
    res.status(201).json(actor);
});

// Actualizar actor
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const actor = actorService.update(id, name, age);
    if (!actor) {
        return res.status(404).json({ message: "Actor not found" });
    }
    res.json(actor);
});

// Eliminar actor
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const actor = actorService.delete(id);
    if (!actor) {
        return res.status(404).json({ message: "Actor not found" });
    }
    res.json(actor);
});

// Obtener actor por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const actor = actorService.getById(id);
    if (!actor) {
        return res.status(404).json({ message: "Actor not found" });
    }
    res.json(actor);
});

module.exports = router;