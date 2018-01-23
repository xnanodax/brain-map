export const fetchDecks = () => (
  $.ajax({
    method: 'GET',
    url: "/api/decks"
  })
);

export const fetchDeck = id => (
  $.ajax({
    method: 'GET',
    url: `/api/decks/${id}`,
  })
);

export const createDeck = deck => (
  $.ajax({
    method: 'POST',
    url: `/api/decks/`,
    data: { deck }
  })
);

export const updateDeck = deck => (
  $.ajax({
    method: 'PATCH',
    url: `/api/decks/${deck.id}`,
    data: { deck }
  })
);

export const deleteDeck = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/decks/${id}`,
  })
);

export const searchDecks = (title) => (
  $.ajax({
    method: 'GET',
    url: '/api/deck_searches/index',
    data: { search: { title }}
  })
);

export const popularDecks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users/popular_decks'
  })
);

export const recentDecks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users/recent_decks'
  })
);

// export const searchQuizletDecks = (title) => (
//   $.ajax({
//     method: 'GET',
//     url: 'https://api.quizlet.com/2.0/search/sets',
//     data: { q: title, client_id: '4G6wYES65N' },
//     beforeSend: function(request) {
//   request.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3333");
// },
//   })
// )
