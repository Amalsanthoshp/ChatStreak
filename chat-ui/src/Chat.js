import React from 'react';
import Container from '@material-ui/core/Container';
import { AppBar } from '@material-ui/core';
import './style.css';
import ChatScreen from './Components/Chat-screen'

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
			    <div className='ui segment fluid'>
			     <div className="card center">
				    <div className="ui centered small circular image">
				      <img src="https://1.bp.blogspot.com/-Rn4T0DkYJwg/VBlY5JoNBoI/AAAAAAAAAGo/JQ32R3YsFg0/s1600/Macaw%2Bpng%2BImages.png"/>
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
				      </span>
				      <span>
				        <i className="user icon"></i>
				        151 Friends
				      </span>
				    </div>
				 </div>
				 </div>
				  	<div className="ui inverted two fluid item menu">
					  <a className="active item">Chats</a>
					  <a className="active item">
					  <div className="ui icon input">
					    <input className="prompt" type="text" placeholder="Search animals..."/>
					    <i className="search icon"></i>
					  </div>
					  </a>
					</div>
				      <div className="ui list">
						  <div className="item">Apples</div>
						  <div className="item">Pears</div>
						  <div className="item">Oranges</div>
						</div>
				    </div>
			    </div>
			    <div className="ten wide column">
			      <ChatScreen/>
			    </div>
			    <div className="three wide column"  style={{paddingLeft:'0',paddingRight:'0'}}>
			      <div  className='ui segment' style={{height:'100vh'}}>
				     <img className="ui medium rounded image" src="https://public-media.si-cdn.com/filer/a5/66/a566a5dc-37e7-4b28-8250-49c32b409642/istock_000006766776_large.jpg"/>
				        <div className="ui list">
						 <div className="item">Apples</div>
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