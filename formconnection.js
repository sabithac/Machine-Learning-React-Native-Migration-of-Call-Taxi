import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Emergency from './emergency';
import Login from './login';
import Payment from './payment';
import Register from './register';
import Support from './support';
import Map from './map';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               
               <ul>
                  <li><Link to={'/'}>Map</Link></li>
                                           <li><Link to={'/Login'}>Login</Link></li>

                                                               <li><Link to={'/Register'}>Register</Link></li>

                         <li><Link to={'/Emergency'}>Emergency</Link></li>
                                    <li><Link to={'/Payment'}>Payment</Link></li>
                                                                                 <li><Link to={'/Support'}>Support</Link></li>



               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Map} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/Emergency' component={Emergency} />
                                    <Route exact path='/Payment' component={Payment} />
                                                                        <Route exact path='/Register' component={Register} />

                                                                        <Route exact path='/Support' component={Support} />

               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;