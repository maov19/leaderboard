const submitScores = async (url, user, score) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: user,
      score: score,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      response.json();
    })
};

export default submitScores;