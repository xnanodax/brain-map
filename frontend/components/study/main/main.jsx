import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   allIds: [],
    //   currentCard: allIds.shift();
    // }
  }



  componentWillReceiveProps(newProps) {
    //go to the next card
  }




  // this.state.allIds.length === 0
  // <MainDone />
  render() {
    return (
      <div className="study-main-container">
        this is the Main bar
      </div>
    );
  }
}

export default Main;
