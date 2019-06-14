import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search} from '../actions/plate.js'
class PlateInput extends Component {
  state = {
    number: "",
    state: ""
  }

  onSubmit = (event) => {
    event.preventDefault()
   
    this.props.search(this.state)
    this.setState({
      number: "",
      state: "" })
  };



  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
   
    })
   

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
export default connect(null, { search})(PlateInput) 
