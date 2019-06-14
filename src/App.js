import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlateInput from './components/PlateInput'
import ViolationContainer from './container/ViolationContainer.js'
import NavBar from './components/NavBar.js'
// import Logout from './components/Logout'
// import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import  {connect} from 'react-redux'
import {getCurrentUser } from './actions/currentUser.js'
class App extends React.Component {
    // <ViolationContainer />
  componentDidMount() {
  
   this.props.getCurrentUser()
}
  render(){
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to NYC parking violation  please enter your information
        <PlateInput />
        <NavBar />
        <SignUp/>
        <ViolationContainer />
      </header>
    
      

    </div>
  );
  }
}


export default connect(null,{getCurrentUser})(App)
