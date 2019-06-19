import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/currentUser.js'


const Logout = ({history, logout }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    logout()
      .then(history.push('/login'));
  };
   
    return (
      <div className="LogoutButton">
        <form onSubmit={handleSubmit}>
          
        <input  type = "submit" value = "Log Out" />
        </form>
      </div>
    )
  }



export default withRouter(connect(null, {logout})(Logout))