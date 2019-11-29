import React from 'react';


class Feed extends React.Component {

	constructor(){
		super()

	}
	render(){

		return(
			<>
					  
				<div className="ui fluid grey card" style={{marginTop:'.5rem'}}>
					<div className="right floated author" style={{paddingTop:'.5rem'}}>
					      <img className="ui avatar image" src="https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg"/> <b>{this.props.message_props.username} </b>
					    </div>
					  <div className="content">
					  	<span className='left floated'> {this.props.message_props.message_send ? this.props.message_props.message_send[0].message:null}</span>
					  	<span className="left floated time description">{this.props.message_props.message_send ? this.props.message_props.message_send[0].sent_time:null}</span> 
					</div>
					</div>
					 
            </>


			);
	}
}

export default Feed;