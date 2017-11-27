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

    createTagging(deckId, name)

    
    // fetchAllTags(nameLower)
    //   .then((action) => { createTagging(deckId, action.tags.id); },
    //     (err) => {
    //       createTag({name: nameLower}).then((action) => {
    //         const newTagId = Object.keys(action.tag)[0];
    //         // console.log(newTagId);
    //         createTagging(deckId, newTagId);
    //       });
    //       // ;
    //       });
  }

  render() {
    const { tags, deckId, fetchTaggings, createTagging, deleteTagging } = this.props;

    return (
      <div className="tag-index-container">
        <div className="tag-header">
          <h3>Tags:</h3>

          <TagsInput
            value={ [] }
            inputProps = {
              {className: 'react-tagsinput-input',
                placeholder: 'Add a tag!'}
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
