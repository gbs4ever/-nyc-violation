import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updateLoginForm } from '../actions/updateloginform'
import { login } from '../actions/currentUser.js'

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  }
//login is the fetch to the backend
  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state, "submitted")
    this.props.updateLoginForm(this.state)
    this.props.login(this.state)
    this.setState({
      email: "",
      password: ""
    })
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
          <label >email  </label>
          <input onChange={this.onChange} type="text" name="email" value={this.state.email} /> <br />
          <label > password</label>
          <input onChange={this.onChange} type=" password" name="password" value={this.state.password} /> <br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
  //this is to read the redux state probally wont neeed , then change first argument to null
// const mapStateToProps = state => {
//   return { 
//     username: state.LoginForm.username,
//     password: state.LoginForm.password
//    }
// }


export default connect(null, { updateLoginForm,login })(LoginForm )