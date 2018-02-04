export const fetchCards = deckId => (
  $.ajax({
    method: 'GET',
    url: `/api/decks/${deckId}/cards`
  })
);

export const fetchCard = (cardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/cards/${cardId}`,
  })
);

export const createCard = (deckId, card) => {
  return $.ajax({
    method: 'POST',
    url: `/api/decks/${deckId}/cards`,
    data: { card }
  });
};

export const updateCard = (card) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/cards/${card.id}`,
    data: { card }
  })
);

export const deleteCard = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/cards/${id}`,
  })
);
