import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import {getCurrentUser } from './actions/currentUser.js'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Home from './components/Home'
import ViolationContainer from './container/ViolationContainer.js'
import PlatesContainer from './container/PlatesContainer.js'
import PlateInput from './components/PlateInput'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Logout from './components/Logout'

class App extends React.Component {
    // <ViolationContainer />
  
  componentDidMount() {
    
   this.props.getCurrentUser()
}
  render(){
    const pic = "https://www.yalefox.com/wp-content/uploads/2018/09/nyc-logo.png"
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <div className="App-header">
        Welcome to NYC parking violation
        <img src={pic} className="App-logo" alt="logo" />
        </div>
        <Route path="/" component={Home} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/logout" render={() => <Logout/> }        />
        <Route exact path="/login" render={() => <LoginForm />} />
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
