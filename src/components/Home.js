///nothing is being rendered built for future use when add more fetures 


import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {
 
    
    return(
    <div className="row">
      
  
     

       


      </div>
    );
  }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}



export default connect(mapStateToProps)(Home)
