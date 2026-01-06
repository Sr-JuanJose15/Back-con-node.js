const express = require('express');
const setupRoutes = require('./routes'); // importo el index de rutas


const app = express();
const port = 3001;

app.use(express.json());

setupRoutes(app);


/* ==================== SERVIDOR ==================== */
app.listen(port, () => {
    console.log(`Backend de Películas escuchando en el puerto ${port}`);
});
