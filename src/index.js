import display from './display.js';
import submitScores from './submit.js';
import './styles.css';

const refresh = document.getElementById('refresh');
const form = document.querySelector('form');
const submit = document.getElementById('submit-button');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gJ44VvuQ2xiMriWT8nkA/scores';

refresh.addEventListener('click', () => {
  display(url);
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = form.name.value;
  const score = form.score.value;
  submitScores(url, name, score);
  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  display(url);
});
