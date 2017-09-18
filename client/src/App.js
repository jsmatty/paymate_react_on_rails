import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SplashPage from './components/SplashPage';
//import GlobalNav from './components/GlobalNav';
import Bill from './components/Bill';
import AllBills from './components/AllBills';
import User from './components/User';
import House from './components/House';
import AllUsers from './components/AllUsers';


import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*<GlobalNav />*/}
           <Route exact path='/' component={SplashPage} />
           <Route exact path='/houses/:house_id/bills/:id' component={Bill} />
           <Route exact path='/houses/:house_id/users/:id' component={User} />
           <Route exact path='/houses/:house_id/bills' component={AllBills} />
           <Route exact path='/houses/:id' component={House} />
           <Route exact path='/houses/:house_id/users' component={AllUsers} />
           

           
           

           
        </div>
      </Router>
    )
  }
}

export default App;
