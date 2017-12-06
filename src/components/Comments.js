import React, { Component } from 'react';
import Comment from './Comment'
class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: {
        username: '',
        body: ''
      },
      data: [
        {username: 'Che', body: 'holy cow!', timestamp: '10:30'},
        {username: 'Fidel', body: 'holy Moly', timestamp: '10:40'},
        {username: 'Barak', body: 'We can', timestamp: '10:50'},
      ]
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
    const updatedData = Object.assign([], this.state.data)
    updatedData.push(this.state.comment)
    this.setState({
      data: updatedData
    })
  }
  render () {
    return (
        <div>
          <Comment commentList = {this.state.data}/>
          <input onChange={this.updateUsername} type= "text" placeholder = "Username" /> <br />
          <input onChange={this.updateBody} type="text" placeholder="Comments" /> <br />
          <input onChange={this.updateTimeStamp} type="text" placeholder="Time" /><br />
          <button onClick={this.submitComment} type="submit" value="submit">Submit</button>
        </div>
      )
  }
}
export default Comments;
