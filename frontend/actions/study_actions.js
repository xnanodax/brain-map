import * as StudyAPIUtil from './../utils/studyscore_util';

// export const RECEIVE_SCORES = "RECEIVE_SCORES";
export const RECEIVE_SCORE = "RECEIVE_SCORE";
export const RECEIVE_STUDY_ERROR = "RECEIVE_STUDY_ERROR";

// const receiveScores = (decks) => ({
//   type: RECEIVE_SCORES,
//   decks
// });

const receiveScore = (deck) => ({
  type: RECEIVE_SCORE,
  deck
});

const receiveStudyError = (errors) => ({
  type: RECEIVE_STUDY_ERROR,
  errors
});

// export const fetchScores = (deckId) => dispatch => (
//   StudyAPIUtil.fetchStudyScores(deckId)
//     .then(scores => dispatch(receiveScores(scores)),
//       (errors) => dispatch(receiveStudyError(errors)))
// );

export const fetchScore = (cardId) => dispatch => (
  StudyAPIUtil.fetchStudyScore(cardId)
    .then(score => dispatch(receiveScore(score)),
      (errors) => dispatch(receiveStudyError(errors)))
);

export const recordScore = (cardId, learningScore) => dispatch => (
  StudyAPIUtil.updateStudyScore(cardId, learningScore)
    .then(score => dispatch(receiveScore(score)),
      (errors) => dispatch(receiveStudyError(errors)))
);
