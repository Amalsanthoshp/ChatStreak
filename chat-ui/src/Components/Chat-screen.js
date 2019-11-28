import React from 'react';
import Feed from './Feed'

class ChatScreen extends React.Component {

	constructor(){
		super()
	}

	render(){

		return(
				<div className="ui segment" style={{height:'100vh'}}>
					<div className="ui two item menu">
					  <a className="item active" style={{justifyContent:'left'}}>
					  	 <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"/>
						 <span>Username</span>
					  </a>
					  <a className="item"style={{justifyContent:'right'}}>Reviews</a>
					</div>
					<div className="ui grid" style={{height:'85vh',overflow:'scroll'}}>
						<div className="ui list">
						  <div className="item right aligned"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>
						  <div className="item"><Feed/></div>

						</div>
					</div>
				   <div className="ui fluid action input">
				   	  <button className="ui button"><i className="upload icon"></i></button>
					 <input type="text" placeholder="Search..."/>
					  <div className=" small ui button">Send</div>
				   </div>
				 </div>


			);




	}
}

export default ChatScreen