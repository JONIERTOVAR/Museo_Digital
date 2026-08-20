const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

// Importar rutas
const authRoutes = require('./routes/auth.routes');
const contentRoutes = require('./routes/content.routes');
const gamificationRoutes = require('./routes/gamification.routes');

const app = express();

app.use(express.json());

// Montar endpoints de la API
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/gamification', gamificationRoutes);

// Documentación Swagger
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor del Museo Digital ejecutándose en http://localhost:${PORT}`);
  console.log(` Panel interactivo de pruebas listo en http://localhost:${PORT}/doc`);
});