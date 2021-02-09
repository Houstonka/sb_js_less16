import React from 'react';

const newComment = ({ addComment }) => {
  let com = {
    author: '',
    text: ''
  }
  return (
    <div>
      <h5>Добавить новый комментарий: </h5>
        <div  className='comment card bg-light mb-3'>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" className="form-control" id="name" onChange = {
                  ev => { com.author = ev.target.value }
                } />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Комментарий</label>
                <textarea className="form-control" id="comment" onChange = {
                  ev => { com.text = ev.target.value }
                } />
              </div>
              <button type="submit" className="btn btn-primary" onClick = {
                ev => {addComment(com.author, com.text); document.querySelector('#name').value=''; document.querySelector('#comment').value=''; }
              }>Опубликовать</button>
            </form>
          </div>
        </div>
      </div>
  );
}
export default newComment
