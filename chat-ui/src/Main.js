import React, { Component } from "react";
import Chat from './Chat';
import {
  Router,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import history from './utils/History';
import LoginForm from './Authentication/LoginForm'
class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="ui one item menu" style={{background:'transparent',marginBottom:'0'}}>
		  <div className="item" style={{justifyContent:'center'}}> <span role="img" style={{fontSize:'1.5rem'}} aria-label="fire">🔥</span> Streakchat</div>
		</div>
          {/*<ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>*/}
          <div className="ui container fluid" style={{height:'100vh',paddingTop:'3rem'}}>
             <Route path="/login" component={LoginForm}/>
             <Route path="/home" component={Chat}/>
          </div>
       </Router>
    );
  }
}
 
export default Main;