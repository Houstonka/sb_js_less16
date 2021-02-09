let nextComment = 5;

export const addComment = (author='', text='') => {
  let date = new Date;

  const stringNumber = (number) => {
    return (number<10)?('0'+number):number;
  }

  return {
    type: 'ADD_COMMENT',
    id: nextComment++,
    author,
    text,
    date: stringNumber(date.getDate())+'.'+stringNumber(date.getMonth()+1)+'.'+date.getFullYear(),
    time: stringNumber(date.getHours())+':'+stringNumber(date.getMinutes())+':'+stringNumber(date.getSeconds())
  }
}

export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}
