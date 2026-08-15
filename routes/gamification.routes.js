const express = require('express');
const router = express.Router();
const gamificationController = require('../controllers/gamification.controller');

router.get('/puntos', gamificationController.getPuntos);
router.post('/visita', gamificationController.registrarVisita);

module.exports = router;