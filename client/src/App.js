import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SplashPage from './components/SplashPage';
import GlobalNav from './components/GlobalNav';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
           <Route exact path='/' component={SplashPage} />
           
           

           <
        </div>
      </Router>
    )
  }
}

export default App;
