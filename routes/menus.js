const express = require('express');
const router = express.Router();
const {Menu} = require('../models/index');

// Get all Menus
router.get('/', async (req, res) => {
  try {
    const orders = await Menu.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menus' });
  }
});

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
