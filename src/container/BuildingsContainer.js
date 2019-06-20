import React, { Component } from 'react'
import { connect } from 'react-redux'
import BuildingCard from '../components/BuildingCard';
class BuildingsContainer extends Component {
  //we will add notice here just add to state with key 

  render() {


    const merged = [].concat.apply([], this.props.buildings);
    
    return (
      <div>
        <BuildingCard violations={merged} />

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { buildings: state.buildings }
}




export default connect(mapStateToProps)(BuildingsContainer)