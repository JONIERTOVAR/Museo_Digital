const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/health', (req, res) => res.json({ status: 'Auth OK' }));

module.exports = router;