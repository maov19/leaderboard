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
    const userAndScore = result.map((item) => `<li>${item.user}: ${item.score}</li>`);
    recentScores.innerHTML = userAndScore.join('');
    return result;
  };
  
  export default display;