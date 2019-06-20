import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import {getCurrentUser} from './actions/currentUser.js'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Home from './components/Home'
import ViolationContainer from './container/ViolationContainer.js'
import PlatesContainer from './container/PlatesContainer.js'
import PlateInput from './components/PlateInput'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Logout from './components/Logout'

class App extends React.Component {
    // <ViolationContainer />
  
  componentDidMount() {
    
   this.props.getCurrentUser()
}
  render(){
    
  return (
    <Router>
    <div className="App">
      
      <Navbar />
     
        <Route path="/" component={Home} />
       
        <Route exact path="/signup" render={() => (!this.props.currentUser ? <SignUp/> : <Redirect to="/search" />)} />
        <Route exact path="/logout" render={() => <Logout/> }        />
        <Route exact path="/login" render={() => ( !this.props.currentUser ? <LoginForm /> : <Redirect to="/search" /> )} />
        <Route exact path="/violations" render={() => <ViolationContainer />} />
        <Route exact path="/plates" render={() => <PlatesContainer />} />
        <Route exact path="/search" component={PlateInput} />
    
      
     
    
         
         </div>
    </Router>
  

  

  );
  }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}



export default connect(mapStateToProps, { getCurrentUser })(App)
