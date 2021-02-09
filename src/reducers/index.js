const comments = (state = [], action) => {

  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { id: action.id, author: action.author, text: action.text, date: action.date, time: action.time }
      ]

    case 'DELETE_COMMENT':
      return state.map((comment) => {
        if (comment && (comment.id == action.id)) {
          return
        } else {
          return comment;
        }
      })

    default: return state;
  }
}

export default comments;
