import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import forgotpassword from'./forgotpassword';
class App extends Component {
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
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Email or Phone"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>      

             <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                          <RaisedButton label="Cancel" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                          <Router>
                          <li><Link to={'/forgotpassword'}>Forgot Password</Link></li>
                          <Switch>
                          <Route exact path='/forgotpassword' component={forgotpassword} />
                          </Switch>
                          </Router>

       <br/>

       <p>Not Registered yet,Register now</p><br/>
       <RaisedButton label="Register" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       
       
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default App;

     