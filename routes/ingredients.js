const express = require('express');
const router = express.Router();
const {Ingredient} = require('../models/index')

// Get all ingredients
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.json(ingredients);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch ingredients' });
  }
});

// Add a new ingredient
router.post('/', async (req, res) => {
  try {
    const ingredient = await Ingredient.create(req.body);
    res.status(201).json(ingredient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an ingredient
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Ingredient.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ingredient' });
  }
});

module.exports = router;
