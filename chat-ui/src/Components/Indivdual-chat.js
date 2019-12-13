import React from 'react';


class IndividualChat extends React.Component {

	constructor(){
		super()

	}
	render(){

		return(
				<>
					<div className="ui fluid red card">
					<div className="right floated author">
					      <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"/> {this.props.name}
					    </div>
					  <div className="content" style={{paddingBottom:'0',paddingTop:'5px'}}>
					  	<span className='left floated'> {this.props.message}</span>
					  	<span className="right floated time">{this.props.time}</span> 
					</div>
					</div>
				</>
			);
	}
}

export default IndividualChat;