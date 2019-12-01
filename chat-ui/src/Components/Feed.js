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
					  	<div className="ui icon bottom right pointing dropdown button">
						  <i className="wrench icon"></i>
						  <div className="menu">
						    <div className="item">
						      <i className="dropdown icon"></i>
						      <span className="text">New</span>
						      <div className="menu">
						        <div className="item">Document</div>
						        <div className="item">Image</div>
						      </div>
						    </div>
						    <div className="item">Save As...</div>
						    <div className="item">Edit</div>
						  </div>
						</div>
					  </div>
					</div>		 
            </>


			);
	}
}

export default Feed;