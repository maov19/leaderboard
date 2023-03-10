const display = async (url) => {
  let result = '';

  try {
    const response = await fetch(url);
    const data = await response.json();
    result = data.result;
  } catch (error) {
    return;
  }
  const recentScores = document.getElementById('recent-scores');
  const userAndScore = result.map((item) => `<li><p>${item.user}</p><p>${item.score}</p></li>`);
  recentScores.innerHTML = userAndScore.join('');
};

export default display;