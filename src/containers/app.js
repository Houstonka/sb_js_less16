import React from 'react';
import { connect } from 'react-redux';

import CommentBlock from '../components/comment-block';
import NewBlock from '../components/new-comment';

import { addComment, deleteComment } from '../actions';

let App = (props) => {
  const {
    comments, addComment, deleteComment
  } = props;

  return (
    <div>
      <CommentBlock
        comments = {comments}
        deleteComment = {deleteComment}
      />
      <NewBlock
        addComment = {addComment}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (author, text) => dispatch(addComment(author, text)),
    deleteComment: (id) => dispatch(deleteComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App
