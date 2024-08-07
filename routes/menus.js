const express = require('express');
const router = express.Router();
const { Menu } = require('../models');

// Add a new menu
router.post('/', async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
