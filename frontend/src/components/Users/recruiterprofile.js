import React, {Component} from 'react';
import axios from 'axios';


export default class recruitetprofile extends Component {
    
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
                welcome to recruite profile{this.state.name}
            </div>
        )
    }
}