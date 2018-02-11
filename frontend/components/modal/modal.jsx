import React from 'react';
class Modal extends React.Component {
  render() {
    const Component = this.props.component;
    const { createDeckModalIsOpen, toggleModal } = this.props;
    return (
      <div id="modal">
        { createDeckModalIsOpen &&
          (<React.Fragment>
            <div className="backdropStyle" onClick={toggleModal}>
            </div>
            <div className="modalStyle">
              <Component {...this.props} />
            </div>
          </React.Fragment>
          )
        }
      </div>

    );
  }
}

export default Modal;
