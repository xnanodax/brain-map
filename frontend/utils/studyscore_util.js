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

export const createStudyScore = (learningScore, cardId) => (
  $.ajax({
    method: 'POST',
    url: `/api/studyscore`,
    data: {
      studyscore: {
        learning_score: learningScore,
        card_id: cardId
      }
    }
  })
);


export const updateStudyScore = (learningScore, cardId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/studyscore/update_by_card`,
    data: {
      studyscore: {
        learning_score: learningScore,
        card_id: cardId
      }
    }
  })
);
