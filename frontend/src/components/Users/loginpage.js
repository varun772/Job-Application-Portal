import React, {Component} from 'react';
import axios from 'axios';


export default class loginpage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    componentDidMount() {
        this.setState({
            name: 'vaurn'
        })
    }

    render(){
        return(
            <div>
                welcome to profile{this.state.name}
            </div>
        )
    }
}