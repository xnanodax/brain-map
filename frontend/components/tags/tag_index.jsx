import React from 'react';
import { Link } from 'react-router-dom';
import TagIndexListItem from './tag_index_list_item';
import TagsInput from 'react-tagsinput';
// import 'react-tagsinput/react-tagsinput.css'; // If using WebPack and style-loader.


class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: props.tags.map(tag => tag.name) };
  }

  componentDidMount() {
    const { fetchTaggings, deckId, tags } = this.props;
    fetchTaggings(deckId);
    // console.log("tags", tags);
    // const tagArr = tags.map(tag => tag.name);
    // console.log("hey", tagArr);
    // debugger
    // if (tags) this.setState({ tags: tagArr });
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
  }

  componentWillReceiveProps(newProps) {
    const { fetchTaggings, deckId, tags } = this.props;
    const newDeckId = newProps.match.params.deckId;
    if (deckId !== newDeckId) {
      fetchTaggings(newDeckId); }
  }

  // checkTagging(id) {
  //   const { createTagging, deckId } = this.props;
  //   createTagging(deckId, id);
  // }
  checkTagging(name) {
    const nameLower = name.toString().toLowerCase();
    const { createTagging, deckId, fetchAllTags, createTag } = this.props;
    fetchAllTags(nameLower)
      .then((action) => { createTagging(deckId, action.tags.id); },
        (err) => {
          createTag({name: nameLower}).then((action) => {
            const newTagId = Object.keys(action.tag)[0];
            // console.log(newTagId);
            createTagging(deckId, newTagId);
          });
          // ;
          });
  }

  render() {
    const { tags, deckId, fetchTaggings, createTagging, deleteTagging } = this.props;

    return (
      <div>
        <h3>Tags:</h3>
            <ul>
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

            <TagsInput
              value={this.state.tags}
              onChange={(value) => this.checkTagging(value[0])} />
      </div>
    );
  }
}

export default TagIndex;
