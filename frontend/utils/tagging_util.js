export const fetchTaggings = (deckId) => (
  $.ajax({
    type: 'GET',
    url: `/api/decks/${deckId}/taggings`
  })
);

export const createTagging = (deckId, tagId) => (
  $.ajax({
    type: 'POST',
    url: `/api/decks/${deckId}/taggings`,
    data: {
      tagging: {
        deck_id: deckId,
        tag_id: tagId
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

export const createTag = (name) => (
  $.ajax({
    type: 'POST',
    url: `/api/tags`,
    data: {
      tag: name
    }
  })
);
