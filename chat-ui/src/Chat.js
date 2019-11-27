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
			<div className="container-fluid">  
			  <div className="row">
			    <div className="col-md-2">
			    	<p className='text-center'> 1 div </p>
			    	<div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
					  <div className="toast-header">
					    <img src="..." className="rounded mr-2" alt="..."/>
					    <strong className="mr-auto">Bootstrap</strong>
					    <small className="text-muted">11 mins ago</small>
					    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
					      <span aria-hidden="true">&times;</span>
					    </button>
					  </div>
					  <div className="toast-body">
					    Hello, world! This is a toast message.
					  </div>
					</div>
			    </div>
			    <div className="col-md-8">
			    	<ChatScreen/>
			    </div>
			    <div className="col-md-2">
			      <p className='text-center'> 3 div </p>
			    </div>
			    </div> 
			 </div>				
			</>

			);
	}
}

export default Chat;