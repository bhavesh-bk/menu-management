const express = require('express');
const router = express.Router();
const { Dish } = require('../models/index');

// Get all dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.findAll();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dishes' });
  }
});



// Add a new dish
router.post('/', async (req, res) => {
  try {
    const dish = await Dish.create(req.body);
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// Delete a dish
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Dish.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete dish' });
  }
});

module.exports = router;
