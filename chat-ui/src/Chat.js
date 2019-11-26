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
			<div className="container">  
			  <div className='side-left'>1</div>  
			  <div className='main'><ChatScreen/></div>  
			  <div className='side-right'>3</div>  
			 </div>				
			</>

			);
	}
}

export default Chat;