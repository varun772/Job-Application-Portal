import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/Users/UsersList'
import Home from './components/Common/Home'
import Register from './components/Common/Register'
import Navbar from './components/templates/Navbar'
import Login from './components/Users/Login'
import loginpage from './components/Users/loginpage'
import applicantprofile from './components/Users/applicantprofile'
import recruitetprofile from './components/Users/recruiterprofile'
import joblist from './components/Users/joblist'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/Login" exact  component={Login}/>
        <Route path="/loginpage" exact component={loginpage}/>
      <Route path="/applicantprofile" exact component={applicantprofile}/>
      <Route path="/recruiterprofile" exact component={recruitetprofile}/>
      <Route path="/joblist" exact component={joblist}/>
      </div>
    </Router>
  );
}

export default App;
