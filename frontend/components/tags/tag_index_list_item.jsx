import React from 'react';
import { Link } from 'react-router-dom';

const TagIndexListItem = ({deckId, tagId, tag, deleteTagging}) => (
  <li className = "tag-index-list-item">
    <div className="tag_name">{ tag.name }</div>

    <i className="fa fa-times fa-1x" aria-hidden="true" onClick={() => deleteTagging(deckId, tag.id)}>
    </i>
  </li>
);

// class TagIndexListItem extends React.Component {
//   handleDelete(deckId, tagId) {
//     const { deleteTagging, history } = this.props;
//     return (e) => {
//       deleteTagging(deckId, tagId);
//     };
//   }
//
//   render () {
//     const { tag, deleteTagging, deckId } = this.props;
//     return (
//       <li className = "tag-index-list-item">
//         { tag.name }
//         <button onClick={this.handleDelete(deckId, tag.id)}>
//           Delete me!
//         </button>
//       </li>
//     );
//   }
// }
//
export default TagIndexListItem;
//
//
//
//
// ({tag, tagId, deleteTagging, deckId}) => (
//   <li className="tag-index-list-item">
//     {tag.name}
//     <button onClick={(deckId, tagId) => deleteTagging(deckId, tagId)}>
//       Delete me
//     </button>
//   </li>
// );
//
// export default TagIndexListItem;
