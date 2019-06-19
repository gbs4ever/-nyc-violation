import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViolationCard from '../components/ViolationCard';
class ViolationContainer extends Component {
//we will add notice here just add to state with key 
  
  render() {


    const merged = [].concat.apply([], this.props.violations);
    return (
      <div>
        <ViolationCard violations={merged}/>
      
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return { violations: state.violations} 
}




export default connect(mapStateToProps)(ViolationContainer)