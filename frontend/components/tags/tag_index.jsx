import React from 'react';
import { Link } from 'react-router-dom';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: this.props.cards };
  }

  componentDidMount() {
    const { fetchTaggings, deckId } = this.props;
    fetchTaggings(deckId);
  }

  componentWillReceiveProps(newProps) {
    const { fetchTaggings, deckId } = this.props;
    const newDeckId = newProps.match.params.deckId;
    if (deckId !== newDeckId) {
      fetchTaggings(newDeckId);
    }
  }

  render() {
    const { tags, deckId, fetchTaggings } = this.props;

    return (
      <div>
        <h3>Tags:</h3>

            <ul>
              {
                tags.map(tag => <li>{tag.name}</li>)
              }
            </ul>
      </div>
    );
  }
}

export default TagIndex;
