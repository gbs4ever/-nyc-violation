import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlateCard from '../components/PlateCard';
import { search } from '../actions/plate.js'
class PlatesContainer extends Component {
  
  render() {
 
    return (
      <div>
        {this.props.currentUser ? <PlateCard plates={this.props.currentUser.plates} search={search}/> : ""}

      </div>
    )
  }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}




export default connect(mapStateToProps)(PlatesContainer)