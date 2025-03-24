const axios = require('axios');
const { FOOTBALL_API_URL, FOOTBALL_API_TOKEN } = require('../config');

const api = axios.create({
  baseURL: FOOTBALL_API_URL,
  headers: { 'X-Auth-Token': FOOTBALL_API_TOKEN },
});

module.exports = {
  getStandings: () => api.get('/competitions/PL/standings'),
  getFixtures: () => api.get('/competitions/PL/matches?status=SCHEDULED'),
  getResults: () => api.get('/competitions/PL/matches?status=FINISHED'),
  getTopScorers: () => api.get('/competitions/PL/scorers'),
};
