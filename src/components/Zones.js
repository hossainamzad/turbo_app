import React, { Component } from 'react'
import Zone from './Zone'
class Zones extends Component {
  constructor(props){
    super(props);
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      }
    }
    // this.handleNameInput = this.handleNameInput.bind(this)
    // this.handleZipCodeInput = this.handleZipCodeInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  // handleNameInput(event){
  //   let newlyAddedPlace = Object.assign({}, this.state.zone)
  //   newlyAddedPlace['name'] = event.target.value
  //   this.setState({
  //     zone: newlyAddedPlace
  //   })
  // }
  // handleZipCodeInput(event){
  //   let newlyAddedPlace = Object.assign({}, this.state.zone)
  //   newlyAddedPlace['zipCode'] = event.target.value
  //   this.setState({
  //     zone: newlyAddedPlace
  //   })
  // }

  handleInputChange(event){
    console.log("newZone: " + event.target.id + "====" + event.target.value)
    const newZone = Object.assign({}, this.state.zone)
    // these both newZone method are identical/
    //const newZone = this.state.zone
    newZone[event.target.id] = event.target.value
    this.setState({
      zone: newZone
    })
  }

  handleSubmit(event){
    // send this zone to the app.js to set the state for the application.
    this.props.handleZonesList(this.state.zone)
  }
  render(){
    return(
        <div>
          <Zone zonesList={this.props.zonesList} />
          <input id="name" onChange={this.handleInputChange} type="text" placeholder="name"/>
          <input id="zipCode" onChange={this.handleInputChange} type="text" placeholder="ZipCode"/>
          <button onClick={this.handleSubmit} type="submit" value="submit">Submit</button>
        </div>
      )
  }
}
export default Zones;
