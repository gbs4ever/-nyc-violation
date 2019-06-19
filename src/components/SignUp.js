import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { signupform} from '../actions/signupform'
import { updateLoginForm } from '../actions/updateloginform'
import { signup} from '../actions/currentUser.js'

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  }
  //login is the fetch to the backend
  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state, "submittedsign")
    this.props.signup(this.state)
    this.props.updateLoginForm(this.state)
    this.setState({
      email: "",
      password: ""
    })
  };



  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })
   

  }

  render() {

    return (
      <div>
        Please Sign Up  
        <form onSubmit={this.onSubmit}>
          <label >Email:  </label>
          <input onChange={this.onChange} type="text" name="email" value={this.state.email} /> <br />
          <label > Password: </label>
          <input onChange={this.onChange} type=" password" name="password" value={this.state.password} /> <br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}



export default connect(null, { signup, updateLoginForm })(SignUp)
