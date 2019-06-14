import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import LoginForm from './LoginForm'

   

const Navbar = ({ currentUser }) => {
  console.log(currentUser)
  return (
    <div>
      Welcome 
      {!currentUser ? <LoginForm /> : <Logout />}
   
    </div>
  )
}
const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps)(Navbar)