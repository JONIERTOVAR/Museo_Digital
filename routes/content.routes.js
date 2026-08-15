const express = require('express');
const router = express.Router();
const contentController = require('../controllers/content.controller');

router.get('/obras', contentController.getObras);
router.get('/obras/:id', contentController.getObraById);

module.exports = router;