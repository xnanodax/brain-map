export const fetchCards = deckId => (
  $.ajax({
    method: 'GET',
    url: `/api/decks/${deckId}/cards`
  })
);

export const fetchCard = (deckId, cardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/decks/${deckId}/cards/${cardId}`,
  })
);

export const createCard = (deckId, card) => {
  return $.ajax({
    method: 'POST',
    url: `/api/decks/${deckId}/cards`,
    data: { card }
  });
};

export const updateCard = (deckId, card) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/decks/${deckId}/cards/${card.id}`,
    data: { card }
  })
);

export const deleteCard = (deckId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/decks/${deckId}/cards/${id}`,
  })
);
