import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Zones from './components/Zones'
import Comments from './components/Comments'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      zonesList: [],
      commentsList: []
    }
    this.handleZonesList = this.handleZonesList.bind(this)
    this.handleCommentsList = this.handleCommentsList.bind(this)

  }

  handleZonesList(zoneAdded){
    // we received it from the Zones.js file and will update the
    // state of the app.js
    console.log(zoneAdded)

    const newZone = this.state.zonesList
    newZone.push(zoneAdded)
    this.setState({
      zonesList: newZone
    })
  }
  handleCommentsList(newComment){
    console.log(newComment)
    const newCommentAdded = this.state.commentsList
    newCommentAdded.push(newComment)
    this.setState({
      commentsList: newCommentAdded
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Zones handleZonesList = {this.handleZonesList} zonesList={this.state.zonesList}/>
        <Comments handleCommentsList = {this.handleCommentsList} commentsList={this.state.commentsList}/>
      </div>
    );
  }
}

export default App;
