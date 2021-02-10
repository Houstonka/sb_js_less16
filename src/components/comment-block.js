import React from 'react';

const comment = (params) => {
  const { comments, deleteComment } = params;

  localStorage.setItem('comments', JSON.stringify(comments));

  return (
    <div>
    {
      comments.map((comment) => {
        if (comment) {
          return (
            <div  className='comment card  mb-3' key={comment.id}>
              <div className="card-body">
                <h5 className="card-title" id='author'>{comment.author}</h5>
                <p className="card-text" id='text'>{comment.text}</p>
                <small>{comment.date} {comment.time}</small><br></br>

                <button type="button" className="btn btn-danger" onClick = {ev => {deleteComment(comment.id)}}>Удалить</button>
              </div>
            </div>
          )
        }
      })
    }
    </div>
  );
}
export default comment
