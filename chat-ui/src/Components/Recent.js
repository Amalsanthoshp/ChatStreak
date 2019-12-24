import React from 'react';
import IndividualChat from './Indivdual-chat';

class Recent extends React.Component {



	render(){
		if(this.props.chat.recentMessages_ReceivedAndSend){
			let numberOfMessage =this.props.chat.recentMessages_ReceivedAndSend.length;
		 	var rows = [];
		 	console.log(this.props.chat)

		 	for (var i = 0; i < numberOfMessage ; i++) {

		 			var idForFeed = ''
		 			var username = ''

		 			console.log('Recieved Id ' , this.props.chat.recentMessages_ReceivedAndSend[i].user_recevied_id)
		 			console.log('User Id ',  this.props.chat.id)
		 			console.log( 'Sent Id' , this.props.chat.recentMessages_ReceivedAndSend[i].user_sent_id)

		 			if (this.props.chat.recentMessages_ReceivedAndSend[i].user_recevied_id === this.props.chat.id) {

		 				idForFeed = this.props.chat.recentMessages_ReceivedAndSend[i].user_sent_id
		 			}
		 			else {

		 				idForFeed = this.props.chat.recentMessages_ReceivedAndSend[i].user_recevied_id
		 			}

				    rows.push(<span key={i} className='item'>
				    	<IndividualChat
				    	 feed ={this.props.feedHandler}
				    	 id = {idForFeed}
				    	 name= {this.props.chat.recentMessages_ReceivedAndSend[i].user_recevied_id}
				    	 message={this.props.chat.recentMessages_ReceivedAndSend[i].message}
				    	 time={this.props.chat.recentMessages_ReceivedAndSend[i].time}
				    	 /></span>);
				    }
		 }
		 else{
		 	let rows = <div> Loading....</div>
		 }
		 let row = rows ? rows :<p> Loading...</p>

		return (
				 <div className="ui list fluid" style={{overflow:'scroll',height:'36vh'}}>
				    {rows}
				  </div>



			)
	}

}

export default Recent;



