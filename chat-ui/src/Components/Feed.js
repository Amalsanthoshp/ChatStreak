import React from 'react';


class Feed extends React.Component {

	constructor(){
		super()

	}
	componentDidUpdate(prevProps) {
		  if (this.props.id !== prevProps.id) {
		    this.fetchData(this.props.id);
		  }
		}
	render(){

		return(

			<>	  
				<div className="ui fluid grey card" style={{marginTop:'.5rem'}}>
					<div className="right floated author" style={{paddingTop:'.5rem'}}>
					      <img className="ui avatar image" src={this.props.image}/> <b>{this.props.name}</b>
					    </div>
					  <div className="content">
					  	<span className='left floated'> {this.props.message}</span>
					  	<span className="left floated time description">{this.props.time}</span> 
					</div>
					</div>		 
            </>


			);
	}
}

export default Feed;