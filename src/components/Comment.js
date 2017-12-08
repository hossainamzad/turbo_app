import React from 'react'
const Comment = (props) => {
  return (
      <div>
        {props.commentsList.map( (comment, i) => {
          return (
              <div key={i}>
                UserName:{comment.username}<br />
                Comment: {comment.body} <br />
                Time: {comment.timestamp}
              </div>
            )
        })}
      </div>
    )
}
export default Comment;
