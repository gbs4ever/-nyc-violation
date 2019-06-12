import React, { Component } from 'react'
//import manageBand from './reducers/manageBand';
class PlateInput extends Component {
  state = {
    number: "",
    state: ""
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state, "submitted")
    //this.props.(this.state)
    this.setState({ name: '' })
  };



  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
   
    })
    console.log(this.state)

  }

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type="text" name="number" value={this.state.number} />
          <input onChange={this.onChange} type="text" name="state" value={this.state.state} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
export default PlateInput 