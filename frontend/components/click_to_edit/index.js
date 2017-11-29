import React from "react";


const makeContentEditable = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.children,
        onEditMode: false
      };

      this.getIntoEditMode = this.getIntoEditMode.bind(this);
      this.handleEnterKey = this.handleEnterKey.bind(this);
      this.getOffEditMode = this.getOffEditMode.bind(this);
      this.changeValue = this.changeValue.bind(this);
    }

    componentWillReceiveProps(newProps){
      this.setState({value: newProps.children, onEditMode: false});
    }

    getIntoEditMode() {
      this.setState({
        value: this.props.children,
        onEditMode: true
      });
    }
    getOffEditMode() {
      this.setState({
        value: this.props.children,
        onEditMode: false
      });
      if (this.props.endEditing) {
        this.props.endEditing(this.state.value);
      }
    }
    handleEnterKey(e) {
      if (e.keyCode === 13 || e.charCode == 13) {
        this.setState({
          value: this.props.children,
          onEditMode: false
        });
        if (this.props.endEditing) {
          this.props.endEditing(this.state.value);
        }
      }
    }
    changeValue(e) {
      this.setState({
        onEditMode: this.state.onEditMode,
        value: e.target.value
      });
    }
    render() {
      const { className } = this.props;
      return (
        <section
          className={className || ""}
          onClick={this.getIntoEditMode}
        >
          {this.state.onEditMode ? (
            <input
              type="text"
              autoFocus
              value={(this.state.value)}
              onChange={this.changeValue}
              onKeyPress={this.handleEnterKey}
              onBlur={this.getOffEditMode}
            />
          ) : (
            <span>{this.state.value}</span>
          )}
        </section>
      );
    }
  };

const labelize = props => <section>{props.children}</section>;

const ClickToEdit = makeContentEditable(labelize);

export default ClickToEdit;

//credit goes to https://github.com/chungchiehlun/react-click-to-edit
