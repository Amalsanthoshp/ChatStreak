import React from 'react';
import axios from 'axios';


class IndividualChat extends React.Component {

	constructor(){
		super()



	this.handleFeed = this.handleFeed.bind(this);
	}

	componentDidMount() {
	  var id = document.getElementById('recent_list').getElementsByTagName('div')[0].id;
	  this.props.feed(id)

	}
	componentDidUpdate(prevProps, prevState) {
	  if (prevProps.id !== this.props.id) {
	  	
	  }
	}
	
	handleFeed(){
		this.props.feed(this.props.id)

	}
	
	render(){

		return(
				<>
			   	    <div id={this.props.id} className="ui green card" style={{borderRadius:'0!important'}} onClick={this.handleFeed}>
				 	   <div className="right floated author">
					 	 <div>
					       <img className="ui avatar image" src={this.props.image}/> {this.props.name}<br></br>
					       <span className=''> {this.props.message}</span>

					      </div>
					     </div>
					    <div style={{paddingBottom:'0',paddingTop:'5px'}}>
					  	 <span className="right floated time">{this.props.time}</span> 
					  </div>
					</div>
				</>
			);
	}
}

export default IndividualChat;