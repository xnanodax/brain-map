export const fetchStudyScores = (deckId) => (
  $.ajax({
    method: 'GET',
    url: `/api/decks/${deckId}/studyscore`
  })
);

export const fetchStudyScore = (cardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/studyscore/fetch`,
    data: {
      studyscore: { card_id: cardId }
    }
  })
);

export const createStudyScore = (cardId, learningScore) => (
  $.ajax({
    method: 'POST',
    url: `/api/studyscore`,
    data: {
      studyscore: {
        card_id: cardId,
        learning_score: learningScore
      }
    }
  })
);


export const updateStudyScore = (cardId, learningScore) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/studyscore/update_by_card`,
    data: {
      studyscore: {
        card_id: cardId,
        learning_score: learningScore
      }
    }
  })
);
