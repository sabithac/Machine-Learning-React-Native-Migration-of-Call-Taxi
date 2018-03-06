import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Invoice from './invoice';
import Totalfare from './totalfare';
import OTP from './otp';
class FAQ extends Component {
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
          <AppBar title="FAQs"
             />
<ul>
          <li><Link to={'/Invoice'}>How do I get the Invoice for my ride?</Link></li>
          <li><Link to={'/Totalfare'}>How can i get the total fare for my ride?</Link></li>
          <li><Link to={'/OTP'}>How to use the OTP for my ride?</Link></li>

</ul>
<Switch>
         <Route exact path='/Invoice' component={Invoice} />
        <Route exact path='/Totalfare' component={Totalfare}/>
        <Route exact path='/OTP' component={OTP}/>

         </Switch>

          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default FAQ;
