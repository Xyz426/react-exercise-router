import React, {Component} from 'react';
import '../style/App.css';
import {BrowserRouter as Router, BrowserRouter, Route,NavLink} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutMe from './AboutMe';

class App extends Component {
  state = {
    now:'/',
  }
  render() {
    return (
      <BrowserRouter>
        <nav>
          <NavLink to="/" activeStyle={{textDecoration:'underline'}}>Home</NavLink>
          <NavLink to='/my-profile' activeStyle={{textDecoration:'underline'}}>My Profile</NavLink>
          <NavLink to='/about-us' activeStyle={{textDecoration:'underline'}}>About Us</NavLink>
        </nav>

        <Route exact path='/' component={Home}/>
        <Route exact path='/my-profile' component={MyProfile}/>
        <Route exact path='/about-us' component={AboutMe}/>
      </BrowserRouter>
    );
  }
}

export default App;
