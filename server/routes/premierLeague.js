const express = require('express');
const router = express.Router();
const footballService = require('../services/api');

router.get('/standings', async (req, res) => {
  try {
    const response = await footballService.getStandings();
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch standings' });
  }
});

router.get('/fixtures', async (req, res) => {
  try {
    const response = await footballService.getFixtures();
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch fixtures' });
  }
});

router.get('/results', async (req, res) => {
  try {
    const response = await footballService.getResults();
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch results' });
  }
});

router.get('/topscorers', async (req, res) => {
  try {
    const response = await footballService.getTopScorers();
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch top scorers' });
  }
});

module.exports = router;
