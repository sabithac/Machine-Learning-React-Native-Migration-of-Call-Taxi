import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Fares extends Component {
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
          <AppBar title="Fares & Charges"
                        />

		   <p>

You can check the estimated total fare for your ride before confirming a booking.</p>

<p>All you need to do is:-  </p>

<p>- Enter the drop location on the booking screen of your Ola app  </p>

<p>- Choose the cab category to view the estimated Total Fare for your ride.  </p>

<p>Note- The estimated total fare for your ride may vary due to traffic conditions or any variation in distance travelled.

</p>


		   


			 
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Fares;

     