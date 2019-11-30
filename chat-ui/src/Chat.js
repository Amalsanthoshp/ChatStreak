import React from 'react';
import Container from '@material-ui/core/Container';
import { AppBar } from '@material-ui/core';
import './style.css';
import ChatScreen from './Components/Chat-screen'
import IndividualChat from './Components/Indivdual-chat';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as Axios from './Axios/Axios';


class Chat extends React.Component {
	 constructor(){
	 	super()
	 
	 this.state = {
    persons: []
  }
  this.handleClick =this.handleClick.bind(this);
  this.getMessage = this.getMessage.bind(this);

 }
 	getMessage(){
	    axios.get(`http://localhost:8000/chat/1/`)
	      .then(res => {
	        const persons = res.data;
	        this.setState({ persons });
	        console.log(persons)
	  })}
	 componentDidMount() {
	 	 axios.get(`http://localhost:8000/chat/1/`)
	      .then(res => {
	        const persons = res.data;
	        this.setState({ persons });
	  		})
	  }
	  
	  handleClick(){
	    let message = document.getElementById('message').value
	  	Axios.postMessage(message,'test','hell')
	  	this.getMessage();
	  	console.log(this.state.persons)

	 }
	  


	render(){
		return ( 
			<>
			<div className="ui internally grid">
			  <div className="row" style={{paddingTop:'0',paddingBottom:'0'}}>
			    <div id='side-bar-left' className="three wide column" style={{paddingLeft:'0',paddingRight:'0'}}>
			    <div  className='ui segment' style={{height:'100vh',borderRadius:'0'}}>
			     <div className="card center" style={{textAlign:'center'}}>
				    <div className="ui centered small circular image">
				      <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"/>
				    </div>
				    <div className="content">
				      <div className="header"><h2>{this.state.persons.username}</h2></div>
				      <div className="meta">
				        <a>Coworker &nbsp;</a><i className="edit icon" style={{fontSize:'1rem',color:'black'}} ></i>
				      </div>
				      <div className="description">
				        Elyse is a copywriter working in New York.
				      </div>
				    </div>
				    <div className="extra content">
				      <span className="right floated">
				        Joined in 2014
				      </span><br></br>
				      <span>
				        <i className="user icon"></i>
				        151 Friends
				      </span>
				    </div>
				 </div>
				<div style={{background:'white'}}>
				 <div className="ui one item item menu">
				  <div className="active item"><i className="users icon" style={{fontSize:'1.5rem',color:'black'}}></i> &nbsp; Chats </div>
				</div>
				      <div className="ui list fluid" style={{overflow:'scroll',height:'36vh'}}>
						  <div className="item">
						  	<IndividualChat/>
						  </div>
						  <span className="item"><IndividualChat/></span>
						  <span className="item"><IndividualChat/></span>
						  <span className="item"><IndividualChat/></span>
						  <span className="item"><IndividualChat/></span>
						  <span className="item"><IndividualChat/></span>
						  <span className="item"><IndividualChat/></span>
						  <span className="item"><IndividualChat/></span>
						</div>
				    </div>
			    </div>
			   </div>
			    <div className="ten wide column" style={{paddingLeft:'0',paddingRight:'0'}}>
			      <ChatScreen feed={this.state.persons} clickHandler={this.handleClick}/>
			    </div>
			    <div className="three wide column"  style={{paddingLeft:'0',paddingRight:'0'}}>
			      <div  className='ui segment' style={{height:'100vh',borderRadius:'0'}}>				     
			      </div>
			      	}
			    </div>
			  </div>
			 </div>
			</>

			);
	}
}

export default Chat;