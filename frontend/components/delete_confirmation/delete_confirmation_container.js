import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DeleteConfirmation from './delete_confirmation';
import { toggleModal } from '../../actions/modal_actions';
import { deleteDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
        deckId: ownProps.match.params.deckId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleAction: () => dispatch(toggleModal()),
    deleteAction: (id) => dispatch(deleteDeck(id)).then(() => ownProps.history.push("/deck"))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteConfirmation));