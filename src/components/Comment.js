import React from 'react'
const Comment = (props) => {
  return (
      <div>
        {props.commentList.map( (comment, i) => {
          return (
              <div key={i}>
                UserName:{comment.username}<br />
                Comment: {comment.body} <br />
                TIme: {comment.timestamp}
              </div>
            )
        })}
      </div>
    )
}
export default Comment;
