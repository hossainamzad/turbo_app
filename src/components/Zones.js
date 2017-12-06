import React, { Component } from 'react'
import Zone from './Zone'
class Zones extends Component {
  constructor(props){
    super(props);
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: [
        {name: 'Queens', zipCode: '11355'},
        {name: 'Brooklyn', zipCode: '12355'},
        {name: 'Bronx', zipCode: '13355'}
      ]
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
    newZone[event.target.id] = event.target.value
    this.setState({
      zone: newZone
    })
  }

  handleSubmit(event){
    console.log("new ZOne: " + JSON.stringify(this.state.zone))
    let newList = Object.assign([], this.state.list)
    newList.push(this.state.zone)
    this.setState({
      list: newList
    })
  }
  render(){
    return(
        <div>
          <Zone currentZone={this.state.list} />
          <input id="name" onChange={this.handleInputChange} type="text" placeholder="name"/>
          <input id="zipCode" onChange={this.handleInputChange} type="text" placeholder="ZipCode"/>
          <button onClick={this.handleSubmit} type="submit" value="submit">Submit</button>
        </div>
      )
  }
}
export default Zones;
