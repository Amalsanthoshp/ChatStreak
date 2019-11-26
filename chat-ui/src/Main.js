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
        <div>
          <h1>Chat IT</h1>
          {/*<ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>*/}
          <div className="content">
             <Route path="/" component={Chat}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;