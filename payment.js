impor	t React, { Component } from 'react';
import logo from './logo.svg';
import image from './instant.png';
import image2 from './img2.png';
import image3 from './img3.png';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Payments extends Component {
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
             title="Payments"
           />
		   <center>
           <p>Best-in-class cashless experience!</p>
		   
		   <p> Add Money,ride,never stop to pay.</p><br/>
           <p> <img src={image} height="100" alt="img"/>
                <img src={image2} height="100" alt="Img1"/>
                 <img src={image3} height="100" alt="Img2"/></p>
<br/>
<br/>
<br/>

			 <RaisedButton label="ADD MONEY" primary={true} style={style} onClick={(event) => this.handleClick(event)}/><br/>

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
export default Payments;

     