import React, { Component } from "react";
import Chat from './Chat';
import Login from './Login';
import {
  Router,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import history from './Axios/History';
class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="ui three item menu" style={{background:'transparent'}}>
		  <div className="active item">Editorials</div>
		  <div className="item">Reviews</div>
		  <div className="item">Upcoming Events</div>
		</div>
          {/*<ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>*/}
          <div className="ui container fluid" style={{height:'100vh'}}>
             <Route path="/login" component={Login}/>
             <Route path="/home" component={Chat}/>
          </div>
       </Router>
    );
  }
}
 
export default Main;