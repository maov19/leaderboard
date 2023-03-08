import './styles.css';

const recentScores = document.getElementById('recent-scores');


const singleScore = document.createElement('li');
singleScore.innerHTML = (`<li>name: 100</li><li>name: 100</li>
`)
recentScores.appendChild(singleScore);