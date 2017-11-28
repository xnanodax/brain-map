export const fetchTaggings = (deckId) => (
  $.ajax({
    type: 'GET',
    url: `/api/decks/${deckId}/taggings`
  })
);

export const createTagging = (deckId, name) => (
  $.ajax({
    type: 'POST',
    url: `/api/decks/${deckId}/taggings`,
    data: {
      tagging: {
        deck_id: deckId,
        name
      }
    }

  })
);

export const deleteTagging = (deckId, tagId) => (
  $.ajax({
    type: 'DELETE',
    url: `/api/decks/${deckId}/taggings/${tagId}`,
    data: {
      tagging: {
        deck_id: deckId,
        tag_id: tagId
      }
    }

  })
);

export const fetchAllTags = (name) => (
  $.ajax({
    type: 'GET',
    url: `/api/tags`,
    data: {
      tag: { name }
    }
  })
);
