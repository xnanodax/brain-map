import * as StudyAPIUtil from './../utils/studyscore_util';

export const RECEIVE_SCORES = "RECEIVE_SCORES";
export const RECEIVE_SCORE = "RECEIVE_SCORE";
export const RECEIVE_STUDY_ERROR = "RECEIVE_STUDY_ERROR";

const receiveScores = (scores) => ({
  type: RECEIVE_SCORES,
  scores
});

const receiveScore = (score) => ({
  type: RECEIVE_SCORE,
  score
});

const receiveStudyError = (errors) => ({
  type: RECEIVE_STUDY_ERROR,
  errors
});

export const fetchScores = (deckId) => dispatch => (
  StudyAPIUtil.fetchStudyScores(deckId)
    .then(scores => dispatch(receiveScores(scores)),
      (errors) => dispatch(receiveStudyError(errors)))
);

export const fetchScore = (cardId) => dispatch => (
  StudyAPIUtil.fetchStudyScore(cardId)
    .then(score => dispatch(receiveScore(score)),
      (errors) => dispatch(receiveStudyError(errors)))
);

export const addScore = (cardId, learningScore) => dispatch => (
  StudyAPIUtil.createStudyScore(cardId, learningScore)
    .then(score => dispatch(receiveScore(score)),
      (errors) => dispatch(receiveStudyError(errors)))
);

export const updateScore = (cardId, learningScore) => dispatch => (
  StudyAPIUtil.updateStudyScore(cardId, learningScore)
    .then(score => dispatch(receiveScore(score)),
      (errors) => dispatch(receiveStudyError(errors)))
);
