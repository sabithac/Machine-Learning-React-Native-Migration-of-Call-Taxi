import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './register.css';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class forgotpassword extends Component {
  constructor(props){
    super(props);
    this.state={
      old_password:'',
      last_name:'',
      email:'',
      password:''
    }
    
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Forgot Password"
           />
           <TextField
           id="old_password"
           type="password"
             hintText="Enter your old_password"
             floatingLabelText="Old Password"
             onChange = {(event,newValue) => this.setState({old_password:newValue})}
             />
           <br/>
           <TextField
           type="password"
             hintText="Enter your New Password"
             floatingLabelText="New Password"
             onChange = {(event,newValue) => this.setState({new_password:newValue})}
             />
           <br/>
           
           <TextField
             type = "password"
             hintText="Re-type your Password"
             floatingLabelText="Re-type Password"
             onChange = {(event,newValue) => this.setState({re_password:newValue})}
             />
           <br/>
           
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                      <RaisedButton label="Cancel" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default forgotpassword;
