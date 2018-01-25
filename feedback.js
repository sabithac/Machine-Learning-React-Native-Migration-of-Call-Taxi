import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      feedback:''
          }
  }
  
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Feedback"
           />
            Leave your feedback here...<br/>
          <input type="text" value={this.state.value} onChange={this.handleChange}  />

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
export default Register;