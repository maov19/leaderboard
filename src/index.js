// TBD - 4. Implement the "Refresh" button that will get all scores for a game created by you from the API (receiving data from the API and parsing the JSON).
// 5. Implement the form "Submit" button that will save a score for a game created by you (sending data to the API).
// 6. Use arrow functions instead of the function keyword.
// 7. Use async and await JavaScript features to consume the API.import './styles.css';

import css from './styles.css';

const recentScores = document.getElementById('recent-scores');
const refresh = document.getElementById('refresh');

const singleScore = document.createElement('li');
singleScore.innerHTML = (`<li>name: 100</li><li>name: 100</li>
`);
recentScores.appendChild(singleScore);

refresh.addEventListener('click', () => {
    //get info from the api
    //display it on the webpage
})