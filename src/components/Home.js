///nothing is being rendered built for future use when add more fetures 


import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {
 // add pics and some text to this page  hi to the user you are logged in 
    
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
