export const fetchStudyScores = (deckId) => (
  $.ajax({
    method: 'GET',
    url: `/api/decks/${deckId}/studyscore`
  })
);

// export const fetchStudyScore = (deckId, cardId) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/decks/${deckId}/studyscore/${studyscoreId}`,
//     data: {
//       studyscore: {
//         card_id: cardId
//       }
//     }
//   })
// );

export const fetchStudyScore = (cardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/studyscore/fetch`,
    data: {
      studyscore: { card_id: cardId }
    }
  })
);

export const createStudyScore = (deckId, learningScore, cardId) => (
  $.ajax({
    method: 'POST',
    url: `/api/decks/${deckId}/studyscore`,
    data: {
      studyscore: {
        learning_score: learningScore,
        card_id: cardId
      }
    }
  })
);


export const updateStudyScore = (deckId, learningScore, cardId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/decks/${deckId}/studyscore/${studyScoreId}`,
    data: {
      studyscore: {
        learning_score: learningScore,
        card_id: cardId
      }
    }
  })
);
