import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViolationCard from '../components/ViolationCard';
class ViolationContainer extends Component {
//we will add notice here just add to state with key 

  render() {
  
    return (
      <div>
        <ViolationCard violations={this.props.violations}/>
      
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return { violations: state.violations} 
}




export default connect(mapStateToProps)(ViolationContainer)