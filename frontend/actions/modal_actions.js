export const TOGGLE_MODAL = "TOGGLE_MODAL";

const receiveModal = () => ({
  type: TOGGLE_MODAL
});

export const toggleModal = () => dispatch => (
  dispatch(receiveModal())
);
