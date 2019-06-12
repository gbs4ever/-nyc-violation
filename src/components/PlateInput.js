import React, { Component } from 'react'

class PlateInput extends Component {
  state = {
    number: "",
    state: ""
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state, "submitted")
    //this.props.(this.state)
    this.setState({
      number: "",
      state: "" })
  };



  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
   
    })
    console.log(this.state)

  }

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label >Plate #  </label>
          <input onChange={this.onChange} type="text" name="number" value={this.state.number} /> <br/>
          <label >State  </label>
          <input onChange={this.onChange} type="text" name="state" value={this.state.state} /> <br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
export default PlateInput 