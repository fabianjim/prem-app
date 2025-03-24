const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchStandings = () =>
  fetch(`${API_BASE}/standings`).then(res => res.json());

export const fetchFixtures = () =>
  fetch(`${API_BASE}/fixtures`).then(res => res.json());

export const fetchResults = () =>
  fetch(`${API_BASE}/results`).then(res => res.json());

export const fetchTopScorers = () =>
  fetch(`${API_BASE}/topscorers`).then(res => res.json());
