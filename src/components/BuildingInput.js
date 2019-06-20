import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchbuildings } from '../actions/building.js'
import { withRouter } from "react-router-dom";
// import PlatesContainer from '../container/PlatesContainer.js'
function validate(houseNumber, street) {
  // true means invalid, so our conditions got reversed
  return {
    houseNumber: houseNumber.length === 0,
    street: street.length === 0
  };
}
class BuildingInput extends Component {
  state = {
    houseNumber: "",
    street: ""
  }


  onSubmit = (event) => {
    event.preventDefault()

    this.props.searchbuildings(this.state)
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else if (data.notice) {
          alert(data.notice)
        } else {
          this.props.history.push('/buildings/index')
        }
      })


    this.setState({
      houseNumber: "",
      street: ""
    })
  };



  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase()

    })


  }


  render() {

    const errors = validate(this.state.houseNumber, this.state.street);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    //const isEnabled = this.state.number.length > 0 && this.state.state.length > 1;
    return (

      <div className="col-centered">

        <fieldset className="search">
          Please enter building information
        <form onSubmit={this.onSubmit}>
            <label >House number  </label>
            <input
              className={errors.houseNumber? "error" : ""}
              onChange={this.onChange} type="text" name="houseNumber" value={this.state.houseNumber} /> <br />
            <label >Street </label>
            <input className={errors.street ? "error" : ""}
              onChange={this.onChange} type="text" name="street" value={this.state.street } /> <br />
            
            <button disabled={isDisabled}>Search </button>
          </form>
        </fieldset>
        <div className="plates">
         

        </div>
      </div>



    )
  }
}

export default withRouter(connect(null, { searchbuildings})(BuildingInput)) 