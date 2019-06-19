import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search} from '../actions/plate.js'
import { withRouter} from "react-router-dom";
import PlatesContainer from '../container/PlatesContainer.js'
function validate(number, state) {
  // true means invalid, so our conditions got reversed
  return {
    number: number.length === 0,
    state: state.length === 0
  };
}
class PlateInput extends Component {
  state = {
    number: "",
    state: ""
  }
    

  onSubmit = (event) => {
    event.preventDefault()
  
    this.props.search(this.state)
      .then(data => {
        if(data.error){
          alert(data.error)
        } else if(data.notice) {
          alert(data.notice)
        } else {
         this.props.history.push('/violations')
        }
      })
      

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
   
  const errors = validate(this.state.number, this.state.state);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
    //const isEnabled = this.state.number.length > 0 && this.state.state.length > 1;
    return (
   
      <div className ="col-centered">
     
        <fieldset className= "search">
        Please enter your information
        <form onSubmit={this.onSubmit}>
          <label >Plate #  </label>
          <input
            className={errors.number ? "error" : ""}
           onChange={this.onChange} type="text" name="number" value={this.state.number} /> <br/>
          <label >State  </label>
          <input className={errors.state ? "error" : ""}
          onChange={this.onChange} type="text" name="state" value={this.state.state} /> <br />
          <button disabled={isDisabled}>Search </button>
        </form>
        </fieldset>
        <div className = "plates">
          <PlatesContainer />

        </div>
      </div>
   
        
      
    )
  }
}

export default withRouter(connect(null, { search})(PlateInput)) 
