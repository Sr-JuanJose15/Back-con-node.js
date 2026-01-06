const { Router } = require('express');
const moviesRouter = require('./movies.router');
const actorsRouter = require('./actors.router');
const castRouter = require('./cast.router');

const router = Router();

function setupRoutes(app) {
    app.use('/api', router); // ruta raíz: localhost:3001/api

    router.use('/movies', moviesRouter);
    router.use('/actors', actorsRouter);
    router.use('/cast', castRouter);
}



module.exports = setupRoutes;