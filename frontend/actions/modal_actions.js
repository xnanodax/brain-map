export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

const receiveOpenModal = () => ({
  type: MODAL_OPEN,
  payload: true
});

const receiveCloseModal = () => ({
  type: MODAL_CLOSE,
  payload: false
});

export const openModal = () => dispatch => (
  dispatch(receiveOpenModal())
);

export const closeModal = () => dispatch => (
  dispatch(receiveCloseModal())
);
