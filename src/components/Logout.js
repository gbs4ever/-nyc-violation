import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {
    return (
      <div>
        <form onSubmit={logout}>
          
        <input type='submit' value = "Log Out" />
        </form>
      </div>
    )
  }



export default connect(null, {logout})(Logout)