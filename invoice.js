import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Invoice extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Invoice"
           />
           
            

          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Invoice;