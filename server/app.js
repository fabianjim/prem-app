console.log("✅ app.js is starting...");


const express = require('express');
const cors = require('cors');
const app = express();
const { PORT } = require('./config');
const premierLeagueRoutes = require('./routes/premierLeague');

app.use(cors());
app.use(express.json());
app.use('/api/premier-league', premierLeagueRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
