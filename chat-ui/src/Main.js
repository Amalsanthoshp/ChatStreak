import React, { Component } from "react";
import Chat from './Chat'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
    	<HashRouter>
        <div className="ui three item menu">
		  <a className="active item">Editorials</a>
		  <a className="item">Reviews</a>
		  <a className="item">Upcoming Events</a>
		</div>
          {/*<ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>*/}
          <div className="ui container fluid" style={{height:'100vh'}}>
             <Route path="/" component={Chat}/>
          </div>
        </HashRouter>
    );
  }
}
 
export default Main;