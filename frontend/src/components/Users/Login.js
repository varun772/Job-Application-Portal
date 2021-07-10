import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            usertype: ''
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        //this.onChangeUsertype = this.onChangeUsertype.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(event) {
        this.setState({ name: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value});
    }

  /* onChangeUsertype(event){
        this.setState({ usertype: event.target.value});
    }*/

    onSubmit(e){
      e.preventDefault();
        const newUser = {
            name:this.state.name,
            password:this.state.password,
            //usertype:this.state.usertype
        };
        axios.post('http://localhost:4000/user/login', newUser)
             .then(res => {
              //if(res.data.status === "1"
            //alert("nothing" +res.data.type);
              {
                if(res.data.type == "Applicant")
                {
                  this.props.history.push("/joblist");
                }
                if(res.data.type == "Recruiter")
                {
                  this.props.history.push("/applicantprofile");
                }
              }
             console.log(res.data)})
             ;
            this.setState({
              name: '',
              password: ''
            });
            //this.props.history.push("/applicantprofile");
    }
    /*class ActionLink extends React.Component () {
        handleClick = (e) => {
          e.preventDefault();
          console.log('The link was clicked.');
        };*/
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Name: </label>
                        <input type="string" required
                               className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeUsername}
                               />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-primary"/>
                </div>
                </form>
            </div>
        )
    }
}

export default Login;
/*<div class="form-group">
    <label>
        Type of user:
        <select value={this.state.usertype} onChange={this.onChangeUsertype}>
            <option value="" selected disabled>Please select</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Applicant">job applicant</option>
        </select>
    </label>
    </div>*/
//<button type="submit"
//onClick ={<Link to= "/loginpage" >Login </Link>}
//onClick ={<NavLink activeClassName="btn btn-primary" to="/loginpage">About</NavLink>}
//onClick = { this.setState({ redirect: "/loginpage" })}
 //href="./loginpage" onClick={this.handleClick}
 //onClick={<Link to="/loginpage">login </Link>}
// >Login
//</button
