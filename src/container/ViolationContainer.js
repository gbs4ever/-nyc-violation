import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViolationCard from '../components/ViolationCard';
class ViolationContainer extends Component {
//we will add notice here just add to state with key 
  
  render() {


    const merged = [].concat.apply([], this.props.something);
    return (
      <div>
        <ViolationCard violations={merged}/>
      
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return { something: state.violations} 
}




export default connect(mapStateToProps)(ViolationContainer)