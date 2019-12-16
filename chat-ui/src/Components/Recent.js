import React from 'react';
import IndividualChat from './Indivdual-chat';

class Recent extends React.Component {



	render(){
		if(this.props.chat){
			console.log(this.props.chat)
			let numberOfMessage =this.props.chat.length;
			console.log(numberOfMessage)
		 	var rows = [];
		 	for (var i = 0; i < numberOfMessage ; i++) {
				    rows.push(<span key={i} className='item'>
				    	<IndividualChat
				    	 id = {this.props.chat[i].id}
				    	 name= {this.props.chat[i].user_recevied_id}
				    	 message={this.props.chat[i].message}
				    	 time={this.props.chat[i].time}
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



