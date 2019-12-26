import React from 'react';
import Feed from './Feed';
import axios from 'axios';
import '../style.css';

class ChatScreen extends React.Component {

	constructor(){
		super()

	 this.messageSend = this.messageSend.bind(this);
	}
	messageSend(event) {
		var id = event.target.id
		this.props.clickHandler(id.split('_')[0])
		

	
	}


	render(){
		 if(this.props.feed){
		 	console.log('Feed', this.props.feed)
		 	let numberOfMessage =this.props.feed.length;
		 	console.log(numberOfMessage)
		 	var rows = [];
		 	var idOfUser = ''
			for (var i = 0; i < numberOfMessage ; i++) {
					var username = ''
					if(this.props.feed[i].user_id === this.props.feed[i].user_recevied_id ){

						username = this.props.feed[i].user_sent_username
						idOfUser = this.props.feed[i].user_sent_id
					}
					else {
						username = this.props.feed[i].user_recevied_username
						idOfUser = this.props.feed[i].user_recevied_id
					}
				    rows.push(
				    	<div key={i} className="item" style={{borderRadius:'0'}}>
				    	<Feed 
				    	 id={this.props.feed[i].id}
				    	 image={'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name='+username}
				    	 message={this.props.feed[i].message}
				    	 time={this.props.feed[i].sent_time}
				 		 name= {username}
				 		/>
				    	</div>);
	
			     	}
			    }
		 else{
		 	let rows = <div> Loading....</div>
		 }
		 

		return(
				<div id='main' className="ui segment" style={{height:'100vh',borderRadius:'0',paddingLeft:'.5rem',paddingRight:'.5rem',paddingTop:'0'}}>
					<div className="ui one item menu" style={{marginBottom:'0'}}>
					  <div className="item"  style={{justifyContent:'space-between',paddingLeft:'10px!important'}}>
					    <div>
					  	 <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"/>
						 <span><b>{username}</b></span>
						</div>
						 <div style={{justifyContent:'flex-end',paddingLeft:'12px'}}><i className="cog icon" style={{fontSize:'1.5rem',color:'green'}}></i></div>
					  </div>
					</div>
					<div id='main-chatscreen' className="ui segment" style={{height:'85vh',overflow:'scroll',paddingTop:'0',paddingBottom:'0',marginTop:'0',marginBottom:'0'}}>
						<div className="ui list" style={{width:'100%'}}>
						  {rows}
						</div>
					</div>	
				   <div className="ui fluid action input">
				   	  <button className="ui button"><i className="upload icon"></i></button>
					 <input type="text" placeholder="Search..." id="message"/>
					  <div className=" small ui button"><i className="paper plane outline icon" id ={idOfUser + '_send'} onClick={this.messageSend} style={{fontSize:'1.5rem'}}></i></div>
				   </div>
				 </div>


			);




	}
}

export default ChatScreen