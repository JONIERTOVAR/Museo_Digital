const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API Museo Digital',
    description: 'Prototipo interactivo de la API del Museo'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
// Al apuntar únicamente a server.js, swagger-autogen rastrea el árbol completo de routers importados
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);