import React from 'React';

class Modal extends 'React.Component' {
  render() {
    const Component = this.props.component;
    const { createDeckModalIsOpen } = this.props;
    return (
      <div>
        { console.warn("Modal", this.props) }
        { createDeckModalIsOpen &&
          (<div>
            <Component {...this.props} />
          </div>)
        }
      </div>

    );
  }
}

export default Modal;

<Modal component={CardIndexContainer} />
