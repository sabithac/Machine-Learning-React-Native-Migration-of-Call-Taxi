import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Emergency extends Component {
	constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
	}
  render() {
    
return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Emergency Contacts"
           />
		   <center>
           <p>Let us make your travel safer!</p>
		   
		   <p> Alert your dear ones in case of an emergency.</p>
		   <p>  Add them to your emergency contacts.</p>
            
			 <RaisedButton label="ADD CONTACTS" primary={true} style={style} onClick={(event) => this.handleClick(event)}/><br/>

			 </center>
			 
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Emergency;

     