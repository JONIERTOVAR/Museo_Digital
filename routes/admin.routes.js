const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ message: 'Módulo Admin activo' });
});

module.exports = router;