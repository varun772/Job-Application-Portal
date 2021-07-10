import React, {Component} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

var varun =" ";
class jobList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: [],sortedUsers: [], sortName:true};
        this.renderIcon = this.renderIcon.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.sortChange1 = this.sortChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/job')
             .then(response => {
                //  console.log(response);
                 this.setState({users: response.data, sortedUsers:response.data, searchText:''});
             })
             .catch(function(error) {
                 console.log(error);
                //  console.log("errorrrr");
             })
    }
    sortChange(){
      var array = this.state.users;
      var flag = this.state.sortName;
      if(varun === "1")
    {
      array.sort(function(a, b) {
          if(a.date != undefined && b.date != undefined){
              return (1 - flag*2) * (new Date(a.date) - new Date(b.date));
          }
          else{
              return 1;
          }
        });
      this.setState({
          users:array,
          sortName:!this.state.sortName,
      })
    }
    else if(varun === "2")
    {
      array.sort(function(a, b) {
          if(a.duration != undefined && b.duration != undefined){
              return (1 - flag*2) * (new Date(a.duration) - new Date(b.duration));
          }
          else{
              return 1;
          }
        });
      this.setState({
          users:array,
          sortName:!this.state.sortName,
      })
    }
    else if(varun === "3")
    {
      array.sort(function(a, b) {
          if(a.salary != undefined && b.salary != undefined){
              return (1 - flag*2) * (new Date(a.salary) - new Date(b.salary));
          }
          else{
              return 1;
          }
        });
      this.setState({
          users:array,
          sortName:!this.state.sortName,
      })
    }
    else{
      array.sort(function(a, b) {
          if(a.rating != undefined && b.rating != undefined){
              return (1 - flag*2) * (new Date(a.rating) - new Date(b.rating));
          }
          else{
              return 1;
          }
        });
      this.setState({
          users:array,
          sortName:!this.state.sortName,
      })
    }
    }
    renderIcon(){
      if(this.state.sortName){
          return(
              <ArrowDownwardIcon/>
          )
      }
      else{
          return(
              <ArrowUpwardIcon/>
          )
      }
    }
    customFunction(e){
        console.log(e.target.value);
        this.setState({
            searchText:e.target.value
        })
    }
    render() {
        return (
            <div>
                <Grid container>
                <Grid item xs={12} md={3} lg={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem text>
                                        <h3>Filters</h3>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem button divider>
                        <Autocomplete
                            id="combo-box-demo"
                            options={this.state.users}
                            getOptionLabel={(option) => option.title}
                            style={{ width: 900 }}
                            renderInput={(params) => <TextField {...params} label="Select Names" variant="outlined" />}

                        />
                    </ListItem>
                </List>
                </Grid>
                <Grid item xs={14} md={10} lg={10}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                            <TableCell> Sr No.</TableCell>
                                            <TableCell> <Button onClick={varun = "1",this.sortChange}>{this.renderIcon()}</Button>Date</TableCell>
                                            <TableCell>Title</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell><Button onClick={varun = "2",this.sortChange}>{this.renderIcon()}</Button>Duration</TableCell>
                                            <TableCell><Button onClick={varun = "3",this.sortChange}>{this.renderIcon()}</Button>Salary</TableCell>
                                            <TableCell><Button onClick={varun = "4",this.sortChange}>{this.renderIcon()}</Button>Rating</TableCell>
                                            <TableCell>Maxapplication</TableCell>
                                            <TableCell>Maxposition</TableCell>
                                            <TableCell>Skills</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                this.state.users.map((user,ind) => (
                                        <TableRow key={ind}>
                                            <TableCell>{ind}</TableCell>
                                            <TableCell>{user.date}</TableCell>
                                            <TableCell>{user.title}</TableCell>
                                            <TableCell>{user.type}</TableCell>
                                            <TableCell>{user.duration}</TableCell>
                                            <TableCell>{user.salary}</TableCell>
                                            <TableCell>{user.rating}</TableCell>
                                            <TableCell>{user.maxapplication}</TableCell>
                                            <TableCell>{user.maxposition}</TableCell>
                                            <TableCell>{user.skills}</TableCell>
                                        </TableRow>
                                ))
                                }
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default jobList;
