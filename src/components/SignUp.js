import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { signupform} from '../actions/signupform'
import { updateLoginForm } from '../actions/updateloginform'
import { signup} from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom';

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
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          this.props.history.push('/search')
        }
      })
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
     
        <form className="search" onSubmit={this.onSubmit}>
          <p> Please Sign Up </p> 
          <label >Email:  </label>
          <input onChange={this.onChange} type="text" name="email" value={this.state.email} /> <br />
          <label > Password: </label>
          <input onChange={this.onChange} type="password" name="password" value={this.state.password} /> <br />
          <input type='submit' value= "Sign Up" />
        </form>
      </div>
    )
  }
}



export default withRouter(connect(null, { signup, updateLoginForm })(SignUp))
