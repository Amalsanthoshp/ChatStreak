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
					      <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"/> Matt
					    </div>
					  <div className="content" style={{paddingBottom:'0',paddingTop:'5px'}}>
					  	<span className='left floated'> Hi this is mattt</span>
					  	<span className="right floated time">2 days ago</span> 
					</div>
					</div>
				</>
			);
	}
}

export default IndividualChat;