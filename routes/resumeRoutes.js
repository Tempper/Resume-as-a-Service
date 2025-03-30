const express = require('express');
const router = express.Router();
const { getResumeJSON, getResumeHTML } = require('../controllers/resumeController');

// Route: GET /resume/json
router.get('/json', getResumeJSON);
router.get('/html', getResumeHTML);

module.exports = router;