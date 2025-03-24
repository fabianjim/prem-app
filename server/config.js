require('dotenv').config();

module.exports = {
  FOOTBALL_API_URL: process.env.FOOTBALL_API_URL,
  FOOTBALL_API_TOKEN: process.env.FOOTBALL_API_TOKEN,
  PORT: process.env.PORT || 5000,
};
