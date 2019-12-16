import React from 'react';
import cogoToast from 'cogo-toast';


class Feed extends React.Component {
	_isMounted = false;
	constructor(){
		super()

	}
	componentDidUpdate(prevProps) {
		  if (this.props.id !== prevProps.id) {
		    cogoToast.success('New Message Arrived','bottom-center');
		    this.fetchData(this.props.id);

		  }
		}
	render(){

		return(

			<>	  
				<div id={this.props.id +'_feed'} className="ui fluid grey card" style={{marginTop:'.5rem'}}>
					<div className="right floated author" style={{paddingTop:'.5rem'}}>
					      <img className="ui avatar image" src={this.props.image}/> <b>{this.props.name}</b>
					    </div>
					  <div className="content">
					  	<span className='left floated'> {this.props.message}</span>
					  	<span className="left floated time description">{this.props.time}</span> 
					  	<span className='right floated'>
					  	<div className="ui icon top right pointing simple dropdown button">
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
						</span>
					  </div>
					</div>		 
            </>


			);
	}
}

export default Feed;