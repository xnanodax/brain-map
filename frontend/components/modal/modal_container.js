import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => ({
  createDeckModalIsOpen: state.ui.createDeckModalIsOpen
});

export default withRouter(connect(mapStateToProps, null)(Modal));
