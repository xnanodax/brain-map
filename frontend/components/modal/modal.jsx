import React from 'react';
class Modal extends React.Component {
  render() {
    const Component = this.props.component;
    const { modalIsOpen, toggleModal } = this.props;
    return (
      <div id="modal">
        { modalIsOpen &&
          (<React.Fragment>
            <div className="modal-background" onClick={toggleModal}>
            </div>
            <div className="modal-box">
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
