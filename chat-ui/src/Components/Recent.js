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
		 				username = this.props.chat.recentMessages_ReceivedAndSend[i].user_sent__username
		 			}
		 			else {

		 				idForFeed = this.props.chat.recentMessages_ReceivedAndSend[i].user_recevied_id
		 				username = this.props.chat.recentMessages_ReceivedAndSend[i].user_recevied__username
		 			}

				    rows.push(<span key={i} className='item'>
				    	<IndividualChat
				    	 feed ={this.props.feedHandler}
				    	 id = {idForFeed}
				    	 name= {username}
				    	 image = {'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name='+username}
				    	 message={this.props.chat.recentMessages_ReceivedAndSend[i].message}
				    	 time={this.props.chat.recentMessages_ReceivedAndSend[i].delivered_time}
				    	 deliver = {this.props.chat.recentMessages_ReceivedAndSend[i].delivered_time ? i : null}
				    	 /></span>);
				    }
		 }
		 else{
		 	let rows = <div> Loading....</div>
		 }
		 let row = rows ? rows :<p> Loading...</p>

		return (
				 <div id='recent_list' className="ui list fluid" style={{overflow:'scroll',height:'36vh'}}>
				    {rows}
				  </div>



			)
	}

}

export default Recent;



