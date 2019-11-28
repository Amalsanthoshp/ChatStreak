import React from 'react';
import Container from '@material-ui/core/Container';
import { AppBar } from '@material-ui/core';
import './style.css';
import ChatScreen from './Components/Chat-screen'
import IndividualChat from './Components/Indivdual-chat';

class Chat extends React.Component {
	constructor(){
		super()

	}

	render(){
		return ( 
			<>
			<div className='ui container fluid'>	
			<div className="ui internally grid">
			  <div className="row" style={{paddingTop:'0'}}>
			    <div className="three wide column" style={{paddingLeft:'0',paddingRight:'0'}}>
			    <div  className='ui segment' style={{height:'100vh'}}>
			     <div className="card center">
				    <div className="ui centered small circular image">
				      <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"/>
				    </div>
				    <div className="content">
				      <div className="header">Elyse</div>
				      <div className="meta">
				        <a>Coworker</a>
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
				      <i className="spotify icon" style={{fontSize:'2rem',color:'green'}}></i>
				    </div>
				 </div>
				 <div className="ui one item item menu">
				  <a className="active item">Chats</a>
				</div>
				      <div className="ui list fluid" style={{overflow:'scroll',height:'35vh'}}>
						  <div className="item">
						  	<IndividualChat/>
						  </div>
						  <div className="item"><IndividualChat/></div>
						  <div className="item"><IndividualChat/></div>
						  <div className="item"><IndividualChat/></div>
						  <div className="item"><IndividualChat/></div>
						  <div className="item"><IndividualChat/></div>
						  <div className="item"><IndividualChat/></div>
						</div>
				    </div>
			    </div>
			    <div className="ten wide column" style={{paddingLeft:'0',paddingRight:'0'}}>
			      <ChatScreen/>
			    </div>
			    <div className="three wide column"  style={{paddingLeft:'0',paddingRight:'0'}}>
			      <div  className='ui segment' style={{height:'100vh'}}>
				     <img className="ui medium rounded image" src="https://public-media.si-cdn.com/filer/a5/66/a566a5dc-37e7-4b28-8250-49c32b409642/istock_000006766776_large.jpg"/>
				        <div className="ui list">
						 <div className="item"><IndividualChat/></div>
						 <div className="item">Pears</div>
					  <div className="item">Oranges</div>
				   </div>
			      </div>
			    </div>
			  </div>
			 </div>
			</div>			
			</>

			);
	}
}

export default Chat;