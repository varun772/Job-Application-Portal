import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            usertype: '',
            date:null
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUsertype = this.onChangeUsertype.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(event) {
        this.setState({ name: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value});
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onChangeUsertype(event){
        this.setState({ usertype: event.target.value});
    }

    onSubmit(e) {
      e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            usertype: this.state.usertype,
            date:Date.now()
        }
        axios.post('http://localhost:4000/user/register', newUser)
             .then(res => {alert("Created\t" + res.data.name);console.log(res.data)})
             ;

        this.setState({
          name: '',
          email: '',
          password: '',
          usertype: '',
          date:null
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>password: </label>
                        <input type="password"
                               className="form-control"
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />
                    </div>
                    <div class="form-group">
                    <label>
                        Type of user:
                        <select value={this.state.usertype} onChange={this.onChangeUsertype}>
                            <option value="" selected disabled>Please select</option>
                            <option value="Recruiter">Recruiter</option>
                            <option value="Applicant">job applicant</option>
                        </select>
                    </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
