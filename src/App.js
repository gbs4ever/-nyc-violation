import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PlateInput from './components/PlateInput'
import ViolationContainer from './container/ViolationContainer.js'
import NavBar from './components/NavBar.js'
import SignUp from './components/SignUp'
import  {connect} from 'react-redux'
import {getCurrentUser } from './actions/currentUser.js'
// import { getplates} from './actions/currentUser.js'
class App extends React.Component {
    // <ViolationContainer />
  
  componentDidMount() {
    // this.props.getplates()
   this.props.getCurrentUser()
}
  render(){
    const pic = "https://www.yalefox.com/wp-content/uploads/2018/09/nyc-logo.png"
  return (
    <div className="App">
      <header className="App-header">
   
        <img src={pic} className="App-logo" alt="logo" />
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


export default connect(null, { getCurrentUser })(App)
