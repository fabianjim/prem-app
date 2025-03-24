import React, { useEffect, useState } from 'react';
import { fetchStandings } from '../services/api';

function App() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetchStandings().then(data => {
      const standings = data?.standings?.[0]?.table || [];
      setTable(standings);
    });
  }, []);

  return (
    <div>
      <h1>Premier League Table</h1>
      <ul>
        {table.map((team, index) => (
          <li key={index}>
            {team.position}. {team.team.name} - {team.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
