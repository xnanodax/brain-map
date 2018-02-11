import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from './modal';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  createDeckModalIsOpen: state.ui.modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleModal: () => dispatch(toggleModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
