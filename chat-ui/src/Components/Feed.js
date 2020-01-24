import React from 'react';
import cogoToast from 'cogo-toast';
import $ from 'jquery';
import axios from 'axios';
import ReactModal from './semantic/ReactModal'


class Feed extends React.Component {
	_isMounted = false;
	constructor(){
		super()
		this.state ={
			display:false,
			modal_display:false,
		}

	this.handleClick = this.handleClick.bind(this);
	this.MouseLeave = this.handleClick.bind(this);
	this.handleEdit = this.handleEdit.bind(this);
	this.handleDelete = this.handleDelete.bind(this);
	}

	handleClick(event) {
			this.setState(prevState => ({
 				 display: !prevState.display
			}));

	}
	handleEdit(event){
		alert("Edit")
		 
	}
	handleDelete(event){
		axios.get('http://localhost:8000/api/feed_delete/'+this.props.id)
		  .then(response => {
		    cogoToast.success("Message deleted",{color:'green',hideAfter:2});
		    console.log(response.data);
		 })
		  .catch(error => {
		  	cogoToast.error("Message can't be deleted !",{color:'green',hideAfter:2});
		    console.log(error);
		});
	}
	
	render(){
		let display = {
			display:this.state.display ? 'block':'none',
		}

		return(


			<>	  		
					<div className="ui feed fluid link" style={{padding:'.5rem'}}>
					  <div className="event">
					    <div className="label">
					      <img src={this.props.image}/>
					      <div className='left floated' style={{marginLeft:'.5rem'}}><b>{this.props.name}</b></div>
					    </div>
						<div className="content" style={{marginTop:'1.1rem',marginLeft:'.5rem'}}>
					  	 <span className='left floated'> {this.props.message}</span>
					  	  <span className="left floated time description">{this.props.time}</span> 
					     	<span className='left floated' style={{background:'transparent'}}  onClick={this.handleClick}>
					     	<div id={this.props.id +'_feed_'} className="ui right floated floating dropdown icon button" style={{padding:'1px'}}>
					  	     <div style={{color:'black'}}>✍</div>
						     <div id={this.props.id +'_feed_settings'}className="menu" style={display}>
						       <div className="item" onClick={this.handleEdit}>Edit</div>
						      <div className="item"><ReactModal clickHandler={this.handleDelete} title='Delete message !' details='Are you sure you want to delete the message ?'/></div>
						    </div>
						  </div>
						</span>
					  </div>
					  </div>
					</div> 
            </>


			);
	}
}

export default Feed;