import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlateInput from './components/PlateInput'
import Logout from './components/Logout'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import  {connect} from 'react-redux'
import {getCurrentUser } from './actions/currentUser.js'
class App extends React.Component {

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
        {!this.props.state.currentUser ? <LoginForm /> : <Logout />}
        <SignUp />
        
      </header>
    

    </div>
  );
  }
}
const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps,{getCurrentUser})(App)
