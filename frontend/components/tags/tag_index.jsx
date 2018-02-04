import React from 'react';
import { Link } from 'react-router-dom';
import TagIndexListItem from './tag_index_list_item';
import TagsInput from 'react-tagsinput';


class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: props.tags.map(tag => tag.name) };
  }

  componentDidMount() {
    const { fetchTaggings, deckId, tags } = this.props;
    fetchTaggings(deckId);
  }

  componentWillReceiveProps(newProps) {
    const { fetchTaggings, deckId, tags } = this.props;
    const newDeckId = newProps.match.params.deckId;
    console.warn("======================");
    console.warn("taggings", "old", this.props, "new", newProps);
    if (deckId !== newDeckId) {
      fetchTaggings(newDeckId); }
  }

  checkTagging(name) {
    const nameLower = name.toString().toLowerCase();
    const { createTagging, deckId, fetchAllTags } = this.props;
    createTagging(deckId, name);
  }

  render() {
    const { tags, deckId, deleteTagging } = this.props;

    return (
      <div className="tag-index-container">
        <div className="tag-header">
          <h3>Tags:</h3>

          <TagsInput
            value={[]}
            inputProps = {
              {className: 'react-tagsinput-input',
                placeholder: 'add a tag'}
              }
              onChange={(value) => this.checkTagging(value[0])} />
        </div>


          <ul className="tag-index-list">
              {
                tags.map((tag, idx) =>
                  <TagIndexListItem
                    key={idx}
                    tag={tag}
                    deleteTagging = {deleteTagging}
                    tag_id={tag.id}
                    />
                )
              }
          </ul>


      </div>
    );
  }
}

export default TagIndex;
