import React, {Component} from 'react';
import axios from 'axios';


export default class applicantprofile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            type:'',
            duration:'',
            salary:'',
            rating:'',
            maxapplication:'',
            maxposition:'',
            skills:'',
            date:null
        }
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeMaxapplication = this.onChangeMaxapplication.bind(this);
        this.onChangeMaxposition = this.onChangeMaxposition.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeTitle(event){
      this.setState({ title : event.target.value});
    }
    onChangeType(event){
      this.setState({ type : event.target.value});
    }
    onChangeDuration(event){
      this.setState({ duration: event.target.value});
    }
    onChangeSalary(event){
      this.setState({ salary: event.target.value});
    }
    onChangeRating(event){
      this.setState({ rating: event.target.value});
    }
    onChangeMaxapplication(event){
      this.setState({maxapplication : event.target.value});
    }
    onChangeMaxposition(event){
      this.setState({ maxposition: event.target.value});
    }
    onChangeSkills(event){
      this.setState({skills: event.target.value});
    }
    onSubmit(e) {
      e.preventDefault();
        const newUser = {
            title:this.state.title,
            type: this.state.type,
            duration:this.state.duration,
            salary:this.state.salary,
            rating:this.state.rating,
            maxapplication:this.state.maxapplication,
            maxposition:this.state.maxposition,
            skills:this.state.skills,
            date:Date.now()
        }
        axios.post('http://localhost:4000/job/profileone', newUser)
             .then(res => {alert("Created\t" + res.data.title);console.log(res.data)})
             ;

        this.setState({
          title:'',
          type:'',
          duration:'',
          salary:'',
          rating:'',
          maxapplication:'',
          maxposition:'',
          salary:'',
          skills:'',
          date:null
        });
    }

    render(){
        return(
            <div>
                //welcome to customer profile{this.state.name}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.title}
                               onChange={this.onChangeTitle}
                               />
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.type}
                               onChange={this.onChangeType}
                               />
                    </div>
                    <div className="form-group">
                        <label>Duration: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.duration}
                               onChange={this.onChangeDuration}
                               />
                    </div>
                    <div className="form-group">
                        <label>Salary: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.salary}
                               onChange={this.onChangeSalary}
                               />
                    </div>
                    <div className="form-group">
                        <label>Rating: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.rating}
                               onChange={this.onChangeRating}
                               />
                    </div>
                    <div className="form-group">
                        <label>Maxapplication: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.maxapplication}
                               onChange={this.onChangeMaxapplication}
                               />
                    </div>
                    <div className="form-group">
                        <label>Maxposition: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.maxposition}
                               onChange={this.onChangeMaxposition}
                               />
                    </div>
                    <div className="form-group">
                        <label>Skills: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.skills}
                               onChange={this.onChangeSkills}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                  </form>
            </div>
        )
    }
}
