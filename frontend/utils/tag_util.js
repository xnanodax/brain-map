export const createTagging = (deckId, tag_id) => (
  $.ajax({
    type: 'POST',
    url: `/api/decks/${deckId}/taggings`,
    data: { tag_id }
  })
);

export const deleteTagging = (deck_id, tag_id) => (
  $.ajax({
    type: 'DELETE',
    url: `/api/decks/${deck_id}/taggings/${tag_id}`,
    data: { deck_id, tag_id }
  })
);
