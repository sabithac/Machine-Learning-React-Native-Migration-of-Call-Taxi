import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './register.css';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class card extends Component {
  constructor(props){
    super(props);
    this.state={
      cardnumber:'',
      cardholdername:'',
      cvv:'',
      validtill:'',
      cardtype:''
    }
    
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Add Money"
           />
           <TextField
           
           type="password"
             hintText="Card Number"
             floatingLabelText="Enter Card Number"
             onChange = {(event,newValue) => this.setState({card_number:newValue})}
             />
           <br/>
           <TextField
           
             hintText="Cardholder name"
             floatingLabelText="Enter Cardholder's name"
             onChange = {(event,newValue) => this.setState({holder_name:newValue})}
             />
           <br/>
           
           <TextField
             type = "password"
             hintText="Cvv"
             floatingLabelText="cvv Number"
             onChange = {(event,newValue) => this.setState({cvv:newValue})}
             />
           <br/>
           <TextField
             hintText="Valid till"
             floatingLabelText="Card valid period"
             onChange = {(event,newValue) => this.setState({valid_till:newValue})}
             />
           <br/>
           <form>
    <div className="radio">
      <label>
        <input type="radio" value="option1" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange} />
       Rupay
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" 
                      checked={this.state.selectedOption === 'option2'} 
                      onChange={this.handleOptionChange} />
        Maestro
      </label>
    </div>
    
  </form>
      />
           
           
           <RaisedButton label="Add Money" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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
export default card;
