import * as TaggingAPIUtil from '../utils/tagging_util';

export const RECEIVE_TAGGINGS = "RECEIVE_TAGGINGS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const RECEIVE_TAGGING_ERRORS = "RECEIVE_TAGGING_ERRORS";

const receiveTaggings = (taggings) => ({
  type: RECEIVE_TAGGINGS,
  taggings
});

const receiveTagging = (tagging) => ({
  type: RECEIVE_TAGGING,
  tagging
});

const removeTagging = (tagging) => ({
  type: REMOVE_TAGGING,
  tagging
});

const receiveTaggingErrors = (errors) => ({
  type: RECEIVE_TAGGING_ERRORS,
  errors
});

export const fetchTaggings = (deckId) => dispatch => (
  TaggingAPIUtil.fetchTaggings(deckId)
    .then(taggings => dispatch(receiveTaggings(taggings)),
          errors => dispatch(receiveTaggingErrors(errors.responseJSON)))
);

export const createTagging = (deckId, tagId) => dispatch => (
  TaggingAPIUtil.createTagging(deckId, tagId)
    .then(tagging => dispatch(receiveTagging(tagging)),
          errors => dispatch(receiveTaggingErrors(errors.responseJSON)))
);


export const deleteTagging = (deckId, tagId) => dispatch => (
  TaggingAPIUtil.deleteTagging(deckId, tagId)
    .then(tagging => dispatch(removeTagging(tagging)),
        errors => dispatch(receiveTaggingErrors(errors.responseJSON)))
);
