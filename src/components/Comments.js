import React, { Component } from 'react';
import Comment from './Comment'
class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: {
        username: '',
        body: '',
        timestamp: ''
      }
    }
    this.submitComment = this.submitComment.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.updateBody = this.updateBody.bind(this)
    this.updateTimeStamp = this.updateTimeStamp.bind(this)
  }
  updateUsername(event){
    console.log("Username updated : " + event.target.value)
    let newComment = Object.assign({}, this.state.comment)
    newComment['username'] = event.target.value
    // const newComment = {
    //   username: event.target.value
    // }
    this.setState({
      comment: newComment
    })
  }
   updateBody(event){
    console.log("body updated : " + event.target.value)
    let newComment = Object.assign({}, this.state.comment)
    newComment['body'] = event.target.value
    // const newComment = {
    //   body: event.target.value
    // }
    this.setState({
      comment: newComment
    })
  }
  updateTimeStamp(event){
    let newComment = Object.assign({}, this.state.comment)
    newComment['timestamp'] = event.target.value
    this.setState({
      comment: newComment
    })
  }
  submitComment(event){
    // event.preventDefault();
    console.log("Comment submitted: " + JSON.stringify(this.state.comment))
    const newComment = Object.assign({}, this.state.comment)
    this.props.handleCommentsList(this.state.comment)
  }
  render () {
    return (
        <div>
          <Comment commentsList = {this.props.commentsList}/>
          <input onChange={this.updateUsername} type= "text" placeholder = "Username" /> <br />
          <input onChange={this.updateBody} type="text" placeholder="Comments" /> <br />
          <input onChange={this.updateTimeStamp} type="text" placeholder="Time" /><br />
          <button onClick={this.submitComment} type="submit" value="submit">Submit</button>
        </div>
      )
  }
}
export default Comments;
